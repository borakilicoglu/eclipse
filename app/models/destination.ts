import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Tour from './tour.js'

export default class Destination extends BaseModel {
  @manyToMany(() => Tour, {
    pivotTable: 'tour_destinations',
  })
  declare tours: ManyToMany<typeof Tour>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare country: string

  @column()
  declare description: string

  @column()
  declare rating: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
