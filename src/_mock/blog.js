import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Top 10 Most Popular Cars in Pakistan',
  'Why Suzuki Mehran is Still a Favorite in Pakistan',
  'Toyota Corolla: The Unbeatable Sedan in Pakistan',
  'Honda Civic vs. Toyota Corolla: Which One to Choose?',
  'Affordable Cars for New Drivers in Pakistan',
  'The Rise of Hybrid Cars in Pakistan',
  'Top Fuel-Efficient Cars in Pakistan',
  'A Guide to Buying Used Cars in Pakistan',
  'How to Maintain Your Car in the Hot Pakistani Climate',
  'The Best Car Accessories for Pakistani Drivers',
  'The Evolution of Car Manufacturing in Pakistan',
  'Tips for Driving Safely on Pakistani Roads',
  'Exploring Pakistan in an SUV: Top Road Trip Destinations',
  'The Impact of High Fuel Prices on Car Owners in Pakistan',
  'Why Car Financing is on the Rise in Pakistan',
  'The Growing Trend of Electric Cars in Pakistan',
  'A Review of the Latest Suzuki Alto',
  'Top 5 Hatchbacks Under 10 Lakhs in Pakistan',
  'The Future of Automobiles in Pakistan: What to Expect',
  'How to Sell Your Car Quickly in Pakistan',
  'The Best Car Detailing Services in Karachi',
  'Car Insurance in Pakistan: What You Need to Know',
  'The Ultimate Guide to Car Modification in Pakistan',
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index],  // Changed index + 1 to index to fix array out-of-bounds error
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
