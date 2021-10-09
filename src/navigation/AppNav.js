/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator'

export default function AppNav() {

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

