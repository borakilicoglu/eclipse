import type { HttpContext } from '@adonisjs/core/http'
import Destination from '#models/destination'

export default class DestinationsController {
  public async index({ inertia }: HttpContext) {
    const destinations = await Destination.query().preload('tours')
    console.log(destinations)

    return inertia.render('destinations', { destinations })
  }
}
