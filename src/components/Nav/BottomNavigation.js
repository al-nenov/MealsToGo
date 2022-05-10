import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ICON_COLORS, ICONS } from './NavIcons';
import { RestaurantNavigator } from './RestaurantsNaviagator';
import MapScreen from '../../screens/map';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const getIcon = (name) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = ICONS[name] || ICONS.default;

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: ICON_COLORS.active,
  tabBarInactiveTintColor: ICON_COLORS.inactive,
});

const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Restaurants"
        options={getIcon('Restaurants')}
        component={RestaurantNavigator}
      />
      <Tab.Screen name="Map" options={getIcon('Map')} component={MapScreen} />
      <Tab.Screen
        name="Settings"
        options={getIcon('Settings')}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomNavigation;
