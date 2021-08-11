/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
  } from '@react-navigation/stack';
  import React from 'react';
  import Login from '../screens/auth/Login';
  
  const Stack = createStackNavigator();
  
  function AuthNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }
  
  export default AuthNavigator;
  