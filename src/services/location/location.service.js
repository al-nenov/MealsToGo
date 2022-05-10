import { locations } from './location.mock';

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject('Not Found');
    } else {
      resolve(locationMock);
    }
  });
};

export const locationTransform = (result) => {
  const location = result.results[0];
  const { lng, lat } = location.geometry.location;
  const viewport = location.geometry.viewport;

  return { lng, lat, viewport };
};
