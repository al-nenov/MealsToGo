import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar } from 'react-native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export const SafeAreaContainer = ({ children }) => (
  <SafeArea>{children}</SafeArea>
);
