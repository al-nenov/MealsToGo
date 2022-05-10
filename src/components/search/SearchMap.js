import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../context/location.context';

const SearchContainer = styled.View`
  padding: 16px;
  top: 40px;
  position: absolute;
  width: 100%;
  z-index: 9;
`;

export const SearchMap = () => {
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
        icon="map"
        onChangeText={handleChangeText}
        value={searchQuery}
        onSubmitEditing={handleSubmitEditing}
      />
    </SearchContainer>
  );
};
