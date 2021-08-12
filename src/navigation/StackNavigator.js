/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import StartScreen from '../../src/screens/auth/StartScreen';
import Login from '../screens/auth/Login';
import OTPScreen from '../screens/auth/OTPScreen';
import MyCards from '../screens/home/MyCards';
import Signup from '../screens/auth/Signup';
import BasicDetailsInput from '../screens/basicDetails/BasicDetailsInput';
import CardHolder from '../screens/basicDetails/CardHolder';
import AddCardScreen from '../screens/addCardScreen/AddCardScreen';

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
                <Stack.Screen name="CardHolder" component={CardHolder}/>
                <Stack.Screen name="StartScreen" component={StartScreen}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="AddCardScreen" component={AddCardScreen}/>
                <Stack.Screen name="OTPScreen" component={OTPScreen}/>
                <Stack.Screen name="BasicDetailsInput" component={BasicDetailsInput} />
                <Stack.Screen name="MyCards" component={MyCards}/>
                <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            </Stack.Navigator>
    );
}


