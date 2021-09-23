/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'

export default function AppNav() {

  const session = useSelector(state => state.SessionReducer.data);
  
  return (
    <NavigationContainer>
      {session.user != {} ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

