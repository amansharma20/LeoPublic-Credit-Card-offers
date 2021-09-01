/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { SessionAction } from '../persistence/actions/SessionAction';
import { useEffect } from 'react';
import AuthNavigator from './AuthNavigator';
import { SessionService } from '../persistence/services/SessionService';

export default function ApplicationNavigator() {
  const dispatch = useDispatch()
  const session = useSelector(state => state.SessionReducer.data);

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    const result =  await SessionService.getSession()
    console.log('result')
    console.log(result)
    console.log('result')
  }


  return (
    <NavigationContainer>
      {session.loggedIn == true ? (<DrawerNavigator />): (<AuthNavigator />) }
    </NavigationContainer>
  );
}
