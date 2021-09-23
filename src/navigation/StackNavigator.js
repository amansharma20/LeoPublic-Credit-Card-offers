/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import BasicDetailsInput from '../screens/basicDetails/BasicDetailsInput';
import AddCardScreen from '../screens/addCard/AddCardScreen';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ExploreScreen from '../screens/exploreScreen/ExploreScreen';
import OffersScreenItemDetails from '../screens/offersScreen/OffersScreenItemDetails';
import ChoosePreferences from '../screens/profile/choosePreferences/ChoosePreferences';
import MonthlySpend from '../screens/profile/monthlySpend/MonthlySpend';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { applicationProperties } from '../../application.properties';
import { useSelector } from 'react-redux';
import CardHolder from '../screens/basicDetails/CardHolder';
import Educate from '../screens/basicDetails/Educate';
import NewToCreditCards from '../screens/basicDetails/NewToCreditCards';
import TempOnBoarding from '../screens/tempOnBoarding/TempOnBoarding';
import CardOverviewScreen from '../screens/offersScreen/CardOverviewScreen';

import StartScreen from '../screens/auth/StartScreen';
import ApplyForCreditCard from '../screens/basicDetails/ApplyForCreditCard';
import CreditProfile from '../screens/basicDetails/CreditProfile';
import EditProfile from '../screens/profile/EditProfile';

const Stack = createStackNavigator();

export default function StackNavigator() {

    const session = useSelector(state => state.SessionReducer.data);
    const Bearer = 'Bearer ' + session && session.user && session.user.data && session.user.data.token;
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
                {
                    session && session.user && session.user.data && session.user.data.signUp == false ?
                        <>
                            <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
                            <Stack.Screen name="CardHolder" component={CardHolder} />
                            <Stack.Screen name="Educate" component={Educate} />
                            <Stack.Screen name="NewToCreditCards" component={NewToCreditCards} />
                            <Stack.Screen name="ChoosePreferences" component={ChoosePreferences} />
                            <Stack.Screen name="MonthlySpend" component={MonthlySpend} />
                            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
                            <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
                            <Stack.Screen name="OffersScreenItemDetails" component={OffersScreenItemDetails} />
                            <Stack.Screen name="CreditProfile" component={CreditProfile} />
                            <Stack.Screen name="EditProfile" component={EditProfile} />
                            <Stack.Screen name="TempOnBoarding" component={TempOnBoarding} />
                            <Stack.Screen name="StartScreen" component={StartScreen} />
                            <Stack.Screen name="ApplyForCreditCard" component={ApplyForCreditCard} />
                            <Stack.Screen name="CardOverviewScreen" component={CardOverviewScreen} />
                        </>
                        :
                        <>
                            <Stack.Screen name="BasicDetailsInput" component={BasicDetailsInput} />
                            <Stack.Screen name="TempOnBoarding" component={TempOnBoarding} />
                            <Stack.Screen name="MonthlySpend" component={MonthlySpend} />
                            <Stack.Screen name="ChoosePreferences" component={ChoosePreferences} />
                        </>
                }




            </Stack.Navigator>
        </ApolloProvider>
    );
}