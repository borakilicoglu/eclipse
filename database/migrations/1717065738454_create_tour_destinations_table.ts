import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tour_destinations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('tour_id').unsigned().references('id').inTable('tours').onDelete('CASCADE')
      table
        .integer('destination_id')
        .unsigned()
        .references('id')
        .inTable('destinations')
        .onDelete('CASCADE')
      table.unique(['tour_id', 'destination_id'])
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTableIfExists(this.tableName)
  }
}
