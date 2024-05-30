import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tour from '#models/tour'
import Destination from '#models/destination'
import Category from '#models/category'

export default class TourSeeder extends BaseSeeder {
  static environment = ['development', 'testing', 'production']

  async run() {
    // Fetch Destinations
    const paris = await Destination.findBy('name', 'Paris')
    const tokyo = await Destination.findBy('name', 'Tokyo')
    const newYork = await Destination.findBy('name', 'New York City')
    const rome = await Destination.findBy('name', 'Rome')
    const sydney = await Destination.findBy('name', 'Sydney')

    // Fetch Categories
    const adventure = await Category.findBy('name', 'Adventure')
    const cultural = await Category.findBy('name', 'Cultural')
    const romantic = await Category.findBy('name', 'Romantic')

    // Create Tours
    const tours = await Tour.createMany([
      {
        name: 'Romantic Paris Tour',
        description: 'Experience the romance of Paris with a guided tour.',
        price: 199.99,
      },
      {
        name: 'Explore Tokyo',
        description: 'Discover the vibrant culture and history of Tokyo.',
        price: 299.99,
      },
      {
        name: 'New York City Highlights',
        description: 'Explore the iconic landmarks of New York City.',
        price: 399.99,
      },
      {
        name: 'Rome Historical Tour',
        description: 'Dive into the rich history of Rome.',
        price: 249.99,
      },
      {
        name: 'Sydney Adventure',
        description: 'Experience thrilling activities in Sydney.',
        price: 349.99,
      },
    ])

    // Attach Destinations
    await tours[0].related('destinations').attach([paris!.id])
    await tours[1].related('destinations').attach([tokyo!.id])
    await tours[2].related('destinations').attach([newYork!.id])
    await tours[3].related('destinations').attach([rome!.id])
    await tours[4].related('destinations').attach([sydney!.id])

    // Attach Categories
    await tours[0].related('categories').attach([romantic!.id])
    await tours[1].related('categories').attach([cultural!.id])
    await tours[2].related('categories').attach([cultural!.id, adventure!.id])
    await tours[3].related('categories').attach([cultural!.id]) // Updated to use existing variable
    await tours[4].related('categories').attach([adventure!.id])
  }
}
