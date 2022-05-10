import React, { useContext } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Search } from '../components/search/Search';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/restaurant.context';
import { FavoritesContext } from '../context/favorites.context';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import { SafeAreaContainer } from '../components/safe-area/SafeAreaContainer';

const RestaurantsList = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export default function RestaurantsScreen({ navigation }) {
  const restaurantsContext = useContext(RestaurantsContext);
  const { favorites, addFavorite } = useContext(FavoritesContext);

  return (
    <SafeAreaContainer>
      {restaurantsContext.isLoading && <LoadingSpinner />}
      <Search />
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
