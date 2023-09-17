// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Screen/Landing';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';

const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
}

export default Navigation;
