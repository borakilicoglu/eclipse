import { HttpContext } from '@adonisjs/core/http'
import Agency from '#models/agency'

export default class AgenciesController {
  public async index({ inertia }: HttpContext) {
    const agencies = await Agency.query().preload('user')

    return inertia.render('agencies', { agencies })
  }

  public async create({ request, response }: HttpContext) {
    const agencyData = request.only(['name', 'location', 'services', 'phone', 'email'])
    const { name, location, services, phone, email } = agencyData

    const agency = new Agency()
    agency.name = name
    agency.location = location
    agency.services = services
    agency.phone = phone
    agency.email = email

    await agency.save()
    return response.redirect('agencies')
  }

  public async update({ inertia, request }: HttpContext) {
    const id = request.input('id')
    const agencyData = request.only(['name', 'location', 'services', 'phone', 'email'])
    const { name, location, services, phone, email } = agencyData

    const agency = await Agency.findOrFail(id)

    agency.name = name
    agency.location = location
    agency.services = services
    agency.phone = phone
    agency.email = email

    await agency.save()

    return inertia.render('agencies', { agencies: await Agency.all() })
  }
}
