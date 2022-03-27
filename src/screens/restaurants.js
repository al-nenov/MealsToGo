import React from 'react';
import { Text, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantsList = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export default function RestaurantsScreen() {
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsList>
        <Text>lis9t</Text>
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <RestaurantCard />}
          keyExtractor={(item) => item}
        />
      </RestaurantsList>
    </>
  );
}
