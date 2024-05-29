import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'branches'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE') // delete branch when user is deleted
      table.integer('agency_id').unsigned().references('agencies.id').onDelete('CASCADE') // delete branch when user is deleted
      table.string('name').notNullable()
      table.string('location').notNullable()
      table.string('phone').notNullable()
      table.string('email').notNullable()
      table.string('address').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
