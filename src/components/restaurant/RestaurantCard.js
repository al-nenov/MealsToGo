import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native';

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyleCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some restaurant',
    icon = '',
    photos = ['https://picsum.photos/700'],
    address = '100 some random ',
    isOpen = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <ScrollView>
      <StyledCard elevation={15}>
        <StyleCardCover
          resizeMode="cover"
          source={{ uri: photos[0] }}
        />
        <Info>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Info>
      </StyledCard>

      <StyledCard elevation={5}>
        <StyleCardCover
          resizeMode="cover"
          source={{ uri: photos[0] }}
        />
        <Info>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Info>
      </StyledCard>

    </ScrollView>
  );
};

export default RestaurantCard;
