import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Uso do Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Pages
import HomeScreen from '../Home/index';
import AnimePage from '../../pages/AnimePage';

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Anime"
        component={AnimePage}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}