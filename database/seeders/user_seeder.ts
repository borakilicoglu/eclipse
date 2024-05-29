import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  static environment = ['development', 'testing', 'production']

  public async run() {
    await User.createMany([
      {
        username: 'Bora Kilicoglu',
        email: 'bora@eclipse.com',
        password: 'password',
        role: 'admin',
      },
      {
        username: 'Cem Adrian',
        email: 'cem@eclipse.com',
        password: 'password',
        role: 'agency',
      },
      {
        username: 'Steve Jobs',
        email: 'steve@eclipse.com',
        password: 'password',
        role: 'branch',
      },
      {
        username: 'Elon Musk',
        email: 'elon@eclipse.com',
        password: 'password',
        role: 'guest',
      },
    ])
  }
}
