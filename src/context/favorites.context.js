import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      if (jsonValue != null) {
        console.log('j', JSON.parse(jsonValue));
        setFavorites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const addFavorite = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorite = (restaurant) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.place_id !== restaurant.place_id
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
