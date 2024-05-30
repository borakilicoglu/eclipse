import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Destination from './destination.js'
import Category from './category.js'

export default class Tour extends BaseModel {
  @manyToMany(() => Category, {
    pivotTable: 'tour_categories',
  })
  declare categories: ManyToMany<typeof Category>

  @manyToMany(() => Destination, {
    pivotTable: 'tour_destinations',
  })
  declare destinations: ManyToMany<typeof Destination>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
