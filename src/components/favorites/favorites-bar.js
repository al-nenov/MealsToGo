import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import RestaurantCardCompact from '../restaurant/RestaurantCard-compact';
import { useNavigation } from '@react-navigation/native';

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

const CompactRestaurantWrapper = styled.View`
  margin-right: 10px;
`;

const FavoritesBar = ({ favorites = [] }) => {
  const navigation = useNavigation();
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Text>Favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <CompactRestaurantWrapper key={restaurant.name}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantsDetails', {
                    restaurant,
                  })
                }
              >
                <RestaurantCardCompact restaurant={restaurant} />
              </TouchableOpacity>
            </CompactRestaurantWrapper>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};

export default FavoritesBar;
