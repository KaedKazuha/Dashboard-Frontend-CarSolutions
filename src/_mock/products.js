import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Suzuki Mehran',
  'Honda Civic',
  'Toyota Corolla',
  'Suzuki Alto',
  'Honda City',
  'Suzuki Cultus',
  'Toyota Yaris',
  'Kia Sportage',
  'Hyundai Tucson',
]

const PRODUCT_COLOR = [
  '#FFFFFF',
];

// ----------------------------------------------------------------------

export const products = [...Array(9)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: `RS ${faker.number.int({ min: 300000, max: 30000000, precision: 1 })}`,  // Ensure this is a string
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
  };
});
