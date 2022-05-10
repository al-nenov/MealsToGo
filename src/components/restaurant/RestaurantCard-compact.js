import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { Platform, Image } from 'react-native';

const isAndroid = Platform.OS === 'android';
const CardImage = isAndroid ? WebView : Image;

const StyledCardImage = styled(CardImage)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CalloutCard = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CalloutTitle = styled.Text`
  color: black;
`;

const RestaurantCardCompact = ({ restaurant }) => {
  return (
    <CalloutCard>
      <StyledCardImage source={{ uri: restaurant.photos[0] }} />
      <CalloutTitle>{restaurant.name}</CalloutTitle>
    </CalloutCard>
  );
};

export default RestaurantCardCompact;
