import React from 'react';
import { Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantsList = styled.View`
  flex: 1;
  background-color: lightblue;
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantsScreen() {
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsList>
        <Text>lis9t</Text>
        <RestaurantCard />
      </RestaurantsList>
    </>
  );
}
