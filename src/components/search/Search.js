import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../context/location.context';

const SearchContainer = styled.View`
  padding: 16px;
`;

export const Search = ({ isFavoritesToggled, onFavoritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  const handleChangeText = (query) => {
    setSearchQuery(query);
  };

  const handleSubmitEditing = () => search(searchQuery);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoritesToggled}
        onChangeText={handleChangeText}
        value={searchQuery}
        onSubmitEditing={handleSubmitEditing}
      />
    </SearchContainer>
  );
};
