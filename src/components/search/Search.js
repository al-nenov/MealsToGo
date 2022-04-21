import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../context/location.context';

const SearchContainer = styled.View`
  padding: 16px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const handleChangeText = (query) => {
    setSearchQuery(query);
  };

  const handleSubmitEditing = () => search(searchQuery);
  return (
    <SearchContainer>
      <Searchbar
        onChangeText={handleChangeText}
        value={searchQuery}
        onSubmitEditing={handleSubmitEditing}
      />
    </SearchContainer>
  );
};
