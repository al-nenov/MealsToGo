import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { Platform, Image } from 'react-native';

const isAndroid = Platform.OS === 'android';

const StyledCardImage = (imgEl) => styled(imgEl)`
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

const RestaurantCardCompact = ({ restaurant, forceAndroidWebview = false }) => {
  const imgEl = isAndroid && forceAndroidWebview ? WebView : Image;
  const CardImage = StyledCardImage(imgEl);
  return (
    <CalloutCard>
      <CardImage source={{ uri: restaurant.photos[0] }} />
      <CalloutTitle>{restaurant.name}</CalloutTitle>
    </CalloutCard>
  );
};

export default RestaurantCardCompact;
