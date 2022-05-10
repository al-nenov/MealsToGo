import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorite = (restaurant) => {
    setFavorites(
      favorites.filter((favorite) => favorite.place_id !== restaurant.place_id)
    );
  };

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
