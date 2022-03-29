import { mocks, mockImages } from './mock';

export const restaurantRequest = (location = '51.219448,4.402464') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('No restaurant found');
    }
    setTimeout(() => resolve(mock), 2000);
  });
};

export const transformRestaurantReq = ({ results = [] }) => {
  return results.map((restaurant) => {
    const randomImage = Math.ceil(Math.random() * mockImages.length - 1);
    restaurant.photos = [mockImages[randomImage]];
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
};

export const restaurantService = async () => {
  try {
    return await restaurantRequest();
  } catch (error) {
    console.error(error);
  }
};
