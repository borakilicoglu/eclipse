import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Agency from '#models/agency'

export default class AgencySeeder extends BaseSeeder {
  public async run() {
    await Agency.createMany([
      {
        name: 'Eclipse',
        location: 'New York, NY',
        services: JSON.stringify(['Flights', 'Hotels', 'Tours']), // Stringify the array
        phone: '123-456-7890',
        email: 'contact@eclipse.com',
      },
      {
        name: 'Pronto',
        location: 'Los Angeles, CA',
        services: JSON.stringify(['Adventure Trips', 'Cruises']), // Stringify the array
        phone: '987-654-3210',
        email: 'info@pronto.com',
      },
      {
        name: 'Globetrotter',
        location: 'Miami, FL',
        services: JSON.stringify(['Luxury Packages', 'Car Rentals']), // Stringify the array
        phone: '456-123-7890',
        email: 'support@globetrotter.com',
      },
      {
        name: 'Sunshine Travel',
        location: 'San Francisco, CA',
        services: JSON.stringify(['Flights', 'Hotels', 'Car Rentals']), // Stringify the array
        phone: '111-222-3333',
        email: 'contact@sunshinetravel.com',
      },
      {
        name: 'Adventure Awaits',
        location: 'Denver, CO',
        services: JSON.stringify(['Adventure Trips', 'Mountain Climbing']), // Stringify the array
        phone: '444-555-6666',
        email: 'info@adventureawaits.com',
      },
      {
        name: 'Vacation Experts',
        location: 'Orlando, FL',
        services: JSON.stringify(['Theme Park Tickets', 'Hotels']), // Stringify the array
        phone: '777-888-9999',
        email: 'support@vacationexperts.com',
      },
      {
        name: 'Paradise Travels',
        location: 'Honolulu, HI',
        services: JSON.stringify(['Beach Resorts', 'Snorkeling']), // Stringify the array
        phone: '101-202-3030',
        email: 'info@paradisetravels.com',
      },
      {
        name: 'City Breaks',
        location: 'Chicago, IL',
        services: JSON.stringify(['City Tours', 'Museums']), // Stringify the array
        phone: '909-808-7070',
        email: 'contact@citybreaks.com',
      },
      {
        name: 'Eco Travels',
        location: 'Seattle, WA',
        services: JSON.stringify(['Eco Tours', 'Hiking']), // Stringify the array
        phone: '404-505-6060',
        email: 'info@ecotravels.com',
      },
      {
        name: 'Business Travel',
        location: 'New York, NY',
        services: JSON.stringify(['Corporate Travel', 'Conferences']), // Stringify the array
        phone: '303-404-5050',
        email: 'contact@businesstravel.com',
      },
      {
        name: 'Luxury Getaways',
        location: 'Las Vegas, NV',
        services: JSON.stringify(['Luxury Hotels', 'Casinos']), // Stringify the array
        phone: '202-303-4040',
        email: 'info@luxurygetaways.com',
      },
      {
        name: 'Family Fun',
        location: 'San Diego, CA',
        services: JSON.stringify(['Family Packages', 'Zoos']), // Stringify the array
        phone: '606-707-8080',
        email: 'support@familyfun.com',
      },
      {
        name: 'Historic Travels',
        location: 'Boston, MA',
        services: JSON.stringify(['Historic Tours', 'Museums']), // Stringify the array
        phone: '505-606-7070',
        email: 'info@historictravels.com',
      },
      {
        name: 'Romantic Getaways',
        location: 'Paris, France',
        services: JSON.stringify(['Romantic Packages', 'Dinner Cruises']), // Stringify the array
        phone: '404-505-6060',
        email: 'contact@romanticgetaways.com',
      },
      {
        name: 'Budget Travel',
        location: 'Austin, TX',
        services: JSON.stringify(['Budget Packages', 'Hostels']), // Stringify the array
        phone: '707-808-9090',
        email: 'info@budgettravel.com',
      },
      {
        name: 'Wildlife Tours',
        location: 'Nairobi, Kenya',
        services: JSON.stringify(['Safari Tours', 'Wildlife Viewing']), // Stringify the array
        phone: '808-909-1010',
        email: 'contact@wildlifetours.com',
      },
      {
        name: 'Island Hoppers',
        location: 'Phuket, Thailand',
        services: JSON.stringify(['Island Tours', 'Boat Trips']), // Stringify the array
        phone: '909-101-2020',
        email: 'info@islandhoppers.com',
      },
      {
        name: 'Snow Adventures',
        location: 'Aspen, CO',
        services: JSON.stringify(['Skiing', 'Snowboarding']), // Stringify the array
        phone: '101-202-3030',
        email: 'contact@snowadventures.com',
      },
      {
        name: 'Urban Explorers',
        location: 'Tokyo, Japan',
        services: JSON.stringify(['City Tours', 'Food Tours']), // Stringify the array
        phone: '202-303-4040',
        email: 'info@urbanexplorers.com',
      },
      {
        name: 'Cruise Planners',
        location: 'Miami, FL',
        services: JSON.stringify(['Cruises', 'Boat Rentals']), // Stringify the array
        phone: '303-404-5050',
        email: 'support@cruiseplanners.com',
      },
    ])
  }
}
