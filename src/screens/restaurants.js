import React, { useContext } from 'react';
import { Text, FlatList } from 'react-native';
import { Search } from '../components/search/Search';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/restaurant.context';
import LoadingSpinner from '../components/loading/LoadingSpinner';

const RestaurantsList = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export default function RestaurantsScreen() {
  const restaurantsContext = useContext(RestaurantsContext);
  return (
    <>
      {restaurantsContext.isLoading && <LoadingSpinner />}
      <Search />
      <RestaurantsList>
        {/* <LoadingSpinner /> */}
        {restaurantsContext.error && <Text>{restaurantsContext.error}</Text>}
        <Text>d</Text>
        <FlatList
          data={restaurantsContext.restaurants}
          renderItem={({ item }) => <RestaurantCard restaurant={item} />}
          keyExtractor={(item) => item.place_id}
        />
      </RestaurantsList>
    </>
  );
}
