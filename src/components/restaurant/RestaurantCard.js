import React from 'react';

import { RestaurantRating } from './RestaurantRating';
import { RestaurantOpened } from './RestaurantOpened';
import { RestaurantTempClosed } from './RestaurantTempClosed';
import {
  StyledCard,
  StyleCardCover,
  Info,
  Address,
  Row,
  RowEnd,
  Title,
  Icon,
} from './RestaurantCard.styles';

const RestaurantCard = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } =
    restaurant;

  return (
    <StyledCard elevation={15}>
      <StyleCardCover resizeMode="cover" source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
        <Row>
          <RestaurantRating rating={rating} />
          <RowEnd>
            <RestaurantTempClosed tempClosed={isClosedTemporarily} />
            <RestaurantOpened isOpen={isOpen} />
            <Icon source={{ uri: icon }} />
          </RowEnd>
        </Row>
      </Info>
    </StyledCard>
  );
};

export default RestaurantCard;
