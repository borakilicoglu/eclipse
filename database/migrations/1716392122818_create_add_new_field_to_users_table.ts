import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'add_new_field_to_users'

  async up() {
    this.schema.alterTable('users', (table) => {
      table.string('role')
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('role')
    })
  }
}
