/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SessionAction } from '../persistence/actions/SessionAction';
import AppNav from './AppNav';

export default function ApplicationNavigator() {

  const dispatch = useDispatch();
 
  React.useEffect(() => {
    dispatch(SessionAction.getSession());
  }, []);


  return (
    <AppNav />
  );
}

