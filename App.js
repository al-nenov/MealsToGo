import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import styled from 'styled-components/native';
import BottomNavigation from './src/components/nav/BottomNavigation';
import { RestaurantsContextProvider } from './src/context/restaurant.context';

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaContainer>
          <RestaurantsContextProvider>
            <BottomNavigation />
          </RestaurantsContextProvider>
        </SafeAreaContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
