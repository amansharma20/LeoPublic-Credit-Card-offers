/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import MyDrawer from './DrawerNavigator';

export default function ApplicationNavigator() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}
