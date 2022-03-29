import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const spinnerWidth = 50;

const Spinner = styled(ActivityIndicator)`
  margin-left: -${spinnerWidth / 2}px;
`;

const SpinnerContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Spinner size={spinnerWidth} animating={true} color={Colors.blue300} />
  </SpinnerContainer>
);

export default LoadingSpinner;
