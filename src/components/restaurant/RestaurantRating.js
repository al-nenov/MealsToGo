import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../assets/img/star';
import styled from 'styled-components/native';

const Stars = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
`;

export const RestaurantRating = ({ rating }) => {
  if (!rating || isNaN(rating)) {
    return null;
  }

  const floored = Math.floor(rating);
  const a = Array.from(new Array(floored));
  return (
    <Stars>
      {a.map((e, i) => (
        <SvgXml key={i} xml={star} width={20} height={20} />
      ))}
    </Stars>
  );
};
