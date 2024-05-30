import Tour from '#models/tour'
import type { HttpContext } from '@adonisjs/core/http'

export default class ToursController {
  public async index({ inertia }: HttpContext) {
    const tours = await Tour.query().preload('destinations')

    return inertia.render('tours', { tours })
  }
}
