import React from 'react';
import { SvgXml } from 'react-native-svg';
import open from '../../assets/img/open';
import styled from 'styled-components/native';

const Open = styled.View`
  margin-right: ${(props) => props.theme.space[2]};
`;

export const RestaurantOpened = ({ isOpen }) => {
  return isOpen ? (
    <Open>
      <SvgXml xml={open} width={20} height={20} />
    </Open>
  ) : null;
};
