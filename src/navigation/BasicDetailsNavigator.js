/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators, createStackNavigator,
} from '@react-navigation/stack';
import React, { } from 'react';
import BasicDetailsInput from '../screens/basicDetails/BasicDetailsInput';
import Educate from '../screens/basicDetails/Educate';
import NewToCreditCards from '../screens/basicDetails/NewToCreditCards';
const Stack = createStackNavigator();

export default function BasicDetailsNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                keyboardHidesTabBar: true,

            }}
        >
            
            <Stack.Screen name="BasicDetailsInput" component={BasicDetailsInput} />
            <Stack.Screen name="NewToCreditCards" component={NewToCreditCards} />
            <Stack.Screen name="Educate" component={Educate} />
        </Stack.Navigator>
    );
}