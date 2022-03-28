import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsScreen from '../../screens/restaurants';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ICON_COLORS, ICONS } from './NavIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const getIcon = (route) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = ICONS[route.name] || ICONS.default;

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: ICON_COLORS.active,
  tabBarInactiveTintColor: ICON_COLORS.inactive,
});

const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => getIcon(route)}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomNavigation;
