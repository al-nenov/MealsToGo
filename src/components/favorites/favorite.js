import React, { useContext } from 'react';
import { FavoritesContext } from '../../context/favorites.context';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favorite = ({ restaurant }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find(
    (favorite) => favorite.place_id === restaurant.place_id
  );

  const handlePress = () => {
    isFavorite ? removeFavorite(restaurant) : addFavorite(restaurant);
  };

  return (
    <FavoriteButton onPress={handlePress}>
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavoriteButton>
  );
};

export default Favorite;
