import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class CategorySeeder extends BaseSeeder {
  static environment = ['development', 'testing', 'production']

  async run() {
    await Category.createMany([
      {
        name: 'Adventure',
        description: 'Outdoor activities and adrenaline-pumping experiences.',
      },
      {
        name: 'Cultural',
        description: 'Immerse in local culture with museums, historical sites, and more.',
      },
      { name: 'Eco', description: 'Sustainable travel focusing on nature conservation.' },
      {
        name: 'Luxury',
        description: 'High-end experiences with premium accommodations and services.',
      },
      { name: 'Family', description: 'Activities suitable for children and adults.' },
      {
        name: 'Romantic',
        description: 'Perfect for couples with romantic destinations and activities.',
      },
      {
        name: 'Food and Wine',
        description: 'Culinary experiences including cooking classes and tastings.',
      },
      {
        name: 'Historical',
        description: 'Explore significant historical sites and landmarks.',
      },
      { name: 'City', description: 'Urban experiences exploring major cities.' },
      {
        name: 'Health and Wellness',
        description: 'Focus on relaxation and rejuvenation with spa treatments.',
      },
      { name: 'Sports', description: 'Centered around sporting events or activities.' },
      {
        name: 'Religious and Pilgrimage',
        description: 'Visits to religious sites and events.',
      },
      { name: 'Photography', description: 'Designed for photography enthusiasts.' },
      { name: 'Educational', description: 'Aimed at students or knowledge seekers.' },
      { name: 'Cruise', description: 'Travel by sea or river with various excursions.' },
    ])
  }
}
