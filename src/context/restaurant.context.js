import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from 'react';
import { LocationContext } from './location.context';

import {
  restaurantRequest,
  transformRestaurantReq,
} from '../services/restaurants/restaurant.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);
  const locationQuery = location ? `${location.lat},${location.lng}` : '1';

  useEffect(() => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantRequest(locationQuery)
      .then(transformRestaurantReq)
      .then((response) => {
        setIsLoading(false);
        setRestaurants(response);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
    return () => {
      setError(null);
      setIsLoading(false);
    };
  }, [locationQuery]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {/* <Text>{JSON.stringify(restaurants)}</Text> */}
      {children}
    </RestaurantsContext.Provider>
  );
};
