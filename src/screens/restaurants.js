import React, { useContext, useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Search } from '../components/search/Search';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import FavoritesBar from '../components/favorites/favorites-bar';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/restaurant.context';
import { FavoritesContext } from '../context/favorites.context';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import { SafeAreaContainer } from '../components/safe-area/SafeAreaContainer';
import { useFavoritesToggle } from '../hooks/useFavoritesToggle';

const RestaurantsList = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export default function RestaurantsScreen({ navigation }) {
  const restaurantsContext = useContext(RestaurantsContext);
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const { isFavoritesToggled, onFavoritesToggled } = useFavoritesToggle();

  return (
    <SafeAreaContainer>
      {restaurantsContext.isLoading && <LoadingSpinner />}
      <Search
        isFavoritesToggled={isFavoritesToggled}
        onFavoritesToggled={onFavoritesToggled}
      />
      {isFavoritesToggled && <FavoritesBar favorites={favorites} />}

      <RestaurantsList>
        {/* <LoadingSpinner /> */}
        {restaurantsContext.error && <Text>{restaurantsContext.error}</Text>}
        <FlatList
          data={restaurantsContext.restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantsDetails', {
                  restaurant: item,
                })
              }
            >
              <RestaurantCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.place_id}
        />
      </RestaurantsList>
    </SafeAreaContainer>
  );
}
