import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Agency from './agency.js'

export default class Branch extends BaseModel {
  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column()
  declare agencyId: number

  @belongsTo(() => Agency)
  declare agency: BelongsTo<typeof Agency>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare location: string

  @column()
  declare phone: string

  @column()
  declare email: string

  @column()
  declare address: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
