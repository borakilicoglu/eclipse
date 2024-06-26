import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    errors: (ctx) => ctx.session?.flashMessages.get('errors'),
    message: (ctx) => ctx.session?.flashMessages.get('message'),
    isAuth: (ctx) => ctx.auth?.isAuthenticated,
    user: (ctx) => ctx.auth?.user,
  },
})
