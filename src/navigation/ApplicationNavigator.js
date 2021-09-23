/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AuthNavigator from './AuthNavigator';

export default function ApplicationNavigator() {
  dispatch = useDispatch();

  useEffect(() => {
    console.log(session)
  }, [])
  const session = useSelector(state => state.SessionReducer.data);

  console.log(session)
  return (
    <NavigationContainer>
      {
        session.loggedIn == true ? <DrawerNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  );
}
