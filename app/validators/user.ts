import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().alphaNumeric({ allowSpaces: true }).minLength(3).maxLength(50),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
    role: vine.enum(['admin', 'agency', 'branch', 'guest'] as const),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
  })
)
