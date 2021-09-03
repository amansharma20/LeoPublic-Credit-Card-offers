/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SessionAction } from '../persistence/actions/SessionAction';

export default function ApplicationNavigator() {
  dispatch = useDispatch();
  useEffect(() => {
    dispatch(SessionAction.getSession());
}, [])
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
