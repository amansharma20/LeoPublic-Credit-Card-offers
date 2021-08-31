/* eslint-disable prettier/prettier */
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/Login';
import OTPScreen from '../screens/auth/OTPScreen';
import Signup from '../screens/auth/Signup';
import StartScreen from '../screens/auth/StartScreen';
import CardHolder from '../screens/basicDetails/CardHolder';
import Educate from '../screens/basicDetails/Educate';
import NewToCreditCards from '../screens/basicDetails/NewToCreditCards';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="CardHolder" component={CardHolder} />
      <Stack.Screen name="Educate" component={Educate} />
      <Stack.Screen name="NewToCreditCards" component={NewToCreditCards} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
