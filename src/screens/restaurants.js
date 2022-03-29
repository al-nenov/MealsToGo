import React, { useContext } from 'react';
import { Text, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/restaurant.context';

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantsList = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export default function RestaurantsScreen() {
  const restaurantsContext = useContext(RestaurantsContext);
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsList>
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
