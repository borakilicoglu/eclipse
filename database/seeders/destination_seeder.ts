import Destination from '#models/destination'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class DestinationSeeder extends BaseSeeder {
  static environment = ['development', 'testing', 'production']

  public async run() {
    await Destination.createMany([
      {
        name: 'Paris',
        country: 'France',
        description: 'The capital city of France, known for its art, fashion, and culture.',
        rating: 4.8,
      },
      {
        name: 'Tokyo',
        country: 'Japan',
        description:
          'Japan’s bustling capital, known for its modern architecture, shopping, and rich history.',
        rating: 4.9,
      },
      {
        name: 'New York City',
        country: 'USA',
        description:
          'The largest city in the USA, famous for its skyline, cultural diversity, and vibrant life.',
        rating: 4.7,
      },
      {
        name: 'Rome',
        country: 'Italy',
        description:
          'The capital city of Italy, renowned for its nearly 3,000 years of globally influential art, architecture, and culture.',
        rating: 4.8,
      },
      {
        name: 'Sydney',
        country: 'Australia',
        description:
          'A major city in Australia, known for its Sydney Opera House, Harbour Bridge, and beautiful beaches.',
        rating: 4.6,
      },
      {
        name: 'London',
        country: 'United Kingdom',
        description:
          'The capital of England and the United Kingdom, known for its history, culture, and landmarks like Big Ben and the Tower of London.',
        rating: 4.7,
      },
      {
        name: 'Barcelona',
        country: 'Spain',
        description:
          'A vibrant city in Spain, famous for its art, architecture, and the works of Antoni Gaudí.',
        rating: 4.8,
      },
      {
        name: 'Dubai',
        country: 'United Arab Emirates',
        description:
          'A city known for its modern architecture, luxury shopping, and vibrant nightlife.',
        rating: 4.7,
      },
      {
        name: 'Cape Town',
        country: 'South Africa',
        description:
          'A port city on South Africa’s southwest coast, known for its harbor, Table Mountain, and Cape Point.',
        rating: 4.6,
      },
      {
        name: 'Bangkok',
        country: 'Thailand',
        description:
          'Thailand’s capital, known for ornate shrines, vibrant street life, and the opulent Grand Palace.',
        rating: 4.6,
      },
      {
        name: 'Istanbul',
        country: 'Turkey',
        description:
          'A major city in Turkey that straddles Europe and Asia across the Bosphorus Strait, known for its historic sites.',
        rating: 4.8,
      },
      {
        name: 'Rio de Janeiro',
        country: 'Brazil',
        description:
          'A huge seaside city in Brazil, famous for its Copacabana and Ipanema beaches, Christ the Redeemer statue, and Sugarloaf Mountain.',
        rating: 4.7,
      },
      {
        name: 'Singapore',
        country: 'Singapore',
        description:
          'A global financial hub with a tropical climate and multicultural population, known for its clean streets and green spaces.',
        rating: 4.9,
      },
      {
        name: 'Amsterdam',
        country: 'Netherlands',
        description:
          'The capital of the Netherlands, known for its artistic heritage, elaborate canal system, and narrow houses with gabled facades.',
        rating: 4.7,
      },
      {
        name: 'Hong Kong',
        country: 'China',
        description:
          'A vibrant city known for its impressive skyline, bustling harbor, and cultural mix.',
        rating: 4.6,
      },
    ])
  }
}
