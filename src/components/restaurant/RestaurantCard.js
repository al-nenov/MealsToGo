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
  const {
    name = 'Some restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/700'],
    vicinity = '100 some random s',
    isOpen = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <StyledCard elevation={15}>
      <StyleCardCover resizeMode="cover" source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{vicinity}</Address>
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
