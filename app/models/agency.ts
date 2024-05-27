import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave, afterFetch, afterFind } from '@adonisjs/lucid/orm'

export default class Agency extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare location: string

  @column()
  declare services: string

  @column()
  declare phone: string

  @column()
  declare email: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  public static async stringifyServices(agency: Agency) {
    if (agency.$dirty.services && typeof agency.services === 'string') {
      try {
        agency.services = JSON.stringify(
          agency.services.split(',').map((service) => service.trim())
        )
      } catch (error) {
        throw new Error('Failed to stringify services field')
      }
    }
  }

  @afterFind()
  @afterFetch()
  public static parseServices(agencies: Agency | Agency[]) {
    if (Array.isArray(agencies)) {
      for (const agency of agencies) {
        if (typeof agency.services === 'string') {
          agency.services = JSON.parse(agency.services)
        }
      }
    } else {
      if (typeof agencies.services === 'string') {
        agencies.services = JSON.parse(agencies.services)
      }
    }
  }
}
