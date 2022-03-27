import React from 'react';
import styled from 'styled-components/native';

const Closed = styled.Text`
  color: ${({ theme }) => theme.colors.text.error};
  margin-left: ${({ theme }) => theme.space[2]};
  margin-right: ${({ theme }) => theme.space[2]};
`;

export const RestaurantTempClosed = ({ tempClosed }) => {
  return tempClosed ? (
    <Closed variant="label">CLOSED TEMPORARILY</Closed>
  ) : null;
};
