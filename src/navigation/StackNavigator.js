/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import BasicDetailsInput from '../screens/basicDetails/BasicDetailsInput';
import AddCardScreen from '../screens/addCard/AddCardScreen';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ExploreScreen from '../screens/exploreScreen/ExploreScreen';
import OffersScreenItemDetails from '../screens/offersScreen/OffersScreenItemDetails';
import ChoosePreferences from '../screens/profile/choosePreferences/ChoosePreferences';
import MonthlySpend from '../screens/profile/monthlySpend/MonthlySpend';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { applicationProperties } from '../../application.properties';
import { useDispatch, useSelector } from 'react-redux';
import { SessionAction } from '../persistence/actions/SessionAction';
import CardHolder from '../screens/basicDetails/CardHolder';
import Educate from '../screens/basicDetails/Educate';
import NewToCreditCards from '../screens/basicDetails/NewToCreditCards';
import TempOnBoarding from '../screens/tempOnBoarding/TempOnBoarding';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';

import Login from '../screens/auth/Login';
import OTPScreen from '../screens/auth/OTPScreen';
import Signup from '../screens/auth/Signup';
import StartScreen from '../screens/auth/StartScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {

    const dispatch = useDispatch()
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


                <Stack.Screen name="TempOnBoarding" component={TempOnBoarding} />
                <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
                <Stack.Screen name="CardHolder" component={CardHolder} />
                <Stack.Screen name="Educate" component={Educate} />
                <Stack.Screen name="NewToCreditCards" component={NewToCreditCards} />
                <Stack.Screen name="ChoosePreferences" component={ChoosePreferences} />
                <Stack.Screen name="MonthlySpend" component={MonthlySpend} />
                <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
                <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
                <Stack.Screen name="OffersScreenItemDetails" component={OffersScreenItemDetails} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="BasicDetailsInput" component={BasicDetailsInput} />
                <Stack.Screen name="OTPScreen" component={OTPScreen} />


            </Stack.Navigator>
        </ApolloProvider>
    );
}





{/* 


 */}