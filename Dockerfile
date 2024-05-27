# syntax = docker/dockerfile:1.2

# Base image
FROM node:20.12.2-alpine3.18 as base

# All deps stage
FROM base as deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

# Production only deps stage
FROM base as production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

# Build stage
FROM base as build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .

# Use secret file during build process and verify the secret
RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env \
    ls -la /etc/secrets && cat /etc/secrets/.env && cp /etc/secrets/.env .env && node ace build

# Verify the build output
RUN ls -la /app/build
RUN ls -la /app/build/bin

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app

# Expose the port your app runs on
EXPOSE 8080

# Set environment variables if needed (optional)
ENV ENV_PATH=/app/.env

# Use secret file at runtime and set ENV_PATH
CMD ["sh", "-c", "ENV_PATH=/app/.env node build/bin/server.js"]
