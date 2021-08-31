/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import AuthNavigator from './AuthNavigator';
import StartScreen from '../../src/screens/auth/StartScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import Signup from '../screens/auth/Signup';
import BasicDetailsInput from '../screens/basicDetails/BasicDetailsInput';
import CardHolder from '../screens/basicDetails/CardHolder';
import AddCardScreen from '../screens/addCard/AddCardScreen';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ExploreScreen from '../screens/exploreScreen/ExploreScreen';
import OffersScreenItemDetails from '../screens/offersScreen/OffersScreenItemDetails';
import ChoosePreferences from '../screens/profile/choosePreferences/ChoosePreferences';
import MonthlySpend from '../screens/profile/monthlySpend/MonthlySpend';
import Login from '../screens/auth/Login';
import NewToCreditCards from '../screens/basicDetails/NewToCreditCards';
import Educate from '../screens/basicDetails/Educate';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { applicationProperties } from '../../application.properties';
import { useDispatch, useSelector } from 'react-redux';
import { SessionAction } from '../persistence/actions/SessionAction';

const Stack = createStackNavigator();



export default function StackNavigator() {

    const dispatch = useDispatch()

    useEffect(() => {
           dispatch(SessionAction.getSession());
      }, [])


    const session = useSelector(state => state.SessionReducer.data);

    const Bearer = 'Bearer ' + session.user.user;

    const client = new ApolloClient({
        uri: applicationProperties.baseUrl + '/graphql',
        cache: new InMemoryCache(),
        headers: {
            Authorization: Bearer
        },
    });
    return (
        <ApolloProvider client={client}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    keyboardHidesTabBar: true,
                }}
            >
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CardHolder" component={CardHolder} />
                <Stack.Screen name="Educate" component={Educate} />
                <Stack.Screen name="NewToCreditCards" component={NewToCreditCards} />
                <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
                <Stack.Screen name="ChoosePreferences" component={ChoosePreferences} />
                <Stack.Screen name="BasicDetailsInput" component={BasicDetailsInput} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="OTPScreen" component={OTPScreen} />
                <Stack.Screen name="MonthlySpend" component={MonthlySpend} />
                <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
                <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
                <Stack.Screen name="OffersScreenItemDetails" component={OffersScreenItemDetails} />
            </Stack.Navigator>
        </ApolloProvider>
    );
}


