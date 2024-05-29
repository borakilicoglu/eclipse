import { HttpContext } from '@adonisjs/core/http'
import Branch from '#models/branch'

export default class BranchesController {
  public async index({ inertia }: HttpContext) {
    const branches = await Branch.query().preload('user')

    return inertia.render('branches', { branches })
  }
}
