/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect, useMemo, useReducer } from 'react';
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
import Login from '../screens/auth/Login';
import OTPScreen from '../screens/auth/OTPScreen';
import Signup from '../screens/auth/Signup';
import * as Keychain from 'react-native-keychain';


const Stack = createStackNavigator();
export const AuthContext = React.createContext();


export default function StackNavigator() {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    const session = useSelector(state => state.SessionReducer.data);
    const Bearer = 'Bearer ' + session && session.user && session.user.data && session.user.data.token;
    const client = new ApolloClient({
        uri: applicationProperties.baseUrl + '/graphql',
        cache: new InMemoryCache(),
        headers: {
            Authorization: Bearer
        },
    });


    useEffect(() => {

        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await Keychain.getGenericPassword();
            } catch (e) {
                // Restoring token failed
            }

            userToken === false ? dispatch({ type: 'RESTORE_TOKEN', token: null }) : dispatch({ type: 'RESTORE_TOKEN', token: userToken })
        };

        bootstrapAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: async data => {
                await Keychain.setGenericPassword("email", data);
                dispatch({ type: 'SIGN_IN', token: data });
            },
            signOut: async () => {
                await Keychain.resetGenericPassword();
                dispatch({ type: 'SIGN_OUT' })
            }
        }),
        []
    );

    if (state.isLoading) {
        // We haven't finished checking for the token yet
        return <TempOnBoarding />;
    }

    return (

        <AuthContext.Provider value={authContext}>
            <ApolloProvider client={client}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        keyboardHidesTabBar: true,
                    }}
                >
                    {state.userToken == null ? (
                        <>
                            <Stack.Screen name="StartScreen" component={StartScreen} />
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="OTPScreen" component={OTPScreen} />
                            <Stack.Screen name="Signup" component={Signup} />
                            <Stack.Screen name="BasicDetailsInput" component={BasicDetailsInput} />
                            <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
                            <Stack.Screen name="CardHolder" component={CardHolder} />
                            <Stack.Screen name="Educate" component={Educate} />
                            <Stack.Screen name="NewToCreditCards" component={NewToCreditCards} />
                            <Stack.Screen name="ChoosePreferences" component={ChoosePreferences} />
                            <Stack.Screen name="MonthlySpend" component={MonthlySpend} />
                            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
                            <Stack.Screen name="OffersScreenItemDetails" component={OffersScreenItemDetails} />
                            <Stack.Screen name="CreditProfile" component={CreditProfile} />
                            <Stack.Screen name="EditProfile" component={EditProfile} />
                            <Stack.Screen name="ApplyForCreditCard" component={ApplyForCreditCard} />
                            <Stack.Screen name="CardOverviewScreen" component={CardOverviewScreen} />
                        </>
                    )}
                </Stack.Navigator>
            </ApolloProvider>
        </AuthContext.Provider>
    );
}