import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user'

export default class UsersController {
  public async index({ inertia }: HttpContext) {
    return inertia.render('users', { users: await User.all() })
  }

  public async update({ inertia, request }: HttpContext) {
    const userId = request.input('id')
    const username = request.input('username')
    const email = request.input('email')
    const role = request.input('role')

    const user = await User.findOrFail(userId)

    user.username = username
    user.email = email
    user.role = role

    await user.save()

    return inertia.render('users', { users: await User.all() })
  }

  async create({ inertia, request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    console.log('Payload from vine', payload)

    const user = await User.findBy('email', payload.email)

    if (user) {
      session.flash('message', { type: 'error', content: 'This email already exists.' })
      return response.redirect().back()
    }

    await User.create(payload)

    return inertia.render('users', { users: await User.all() })
  }
}
