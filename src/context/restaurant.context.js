import React, { useState, createContext, useEffect, useMemo } from 'react';
import { Text } from 'react-native-paper';

import {
  restaurantRequest,
  transformRestaurantReq,
} from '../services/restaurants/restaurant.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const getRestaurants = () => {
    setIsLoading(true);
    restaurantRequest()
      .then(transformRestaurantReq)
      .then((response) => {
        setIsLoading(false);
        setRestaurants(response);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
      }}
    >
      {/* <Text>{JSON.stringify(restaurants)}</Text> */}
      {children}
    </RestaurantsContext.Provider>
  );
};
