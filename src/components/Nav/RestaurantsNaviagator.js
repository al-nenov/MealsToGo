import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import RestaurantsScreen from '../../screens/restaurants';
import RestaurantsDetailsScreen from '../../screens/restaurantDetails';
import { Text } from 'react-native';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsNavigator"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetails"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
