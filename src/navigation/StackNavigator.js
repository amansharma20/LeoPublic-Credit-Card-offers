/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import Login from '../screens/auth/Login';
import OTPScreen from '../screens/auth/OTPScreen';


const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    keyboardHidesTabBar: true,
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="OTPScreen" component={OTPScreen} />
                <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            </Stack.Navigator>

       

    );
}

