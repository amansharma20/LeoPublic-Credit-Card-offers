/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators, createStackNavigator,
} from '@react-navigation/stack';
import React, { } from 'react';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ExploreScreen from '../screens/exploreScreen/ExploreScreen';
import OffersScreenItemDetails from '../screens/offersScreen/OffersScreenItemDetails';
import ChoosePreferences from '../screens/profile/choosePreferences/ChoosePreferences';
import MonthlySpend from '../screens/profile/monthlySpend/MonthlySpend';
import CardHolder from '../screens/basicDetails/CardHolder';
import Educate from '../screens/basicDetails/Educate';
import NewToCreditCards from '../screens/basicDetails/NewToCreditCards';
import CardOverviewScreen from '../screens/offersScreen/CardOverviewScreen';
import ApplyForCreditCard from '../screens/basicDetails/ApplyForCreditCard';
import CreditProfile from '../screens/basicDetails/CreditProfile';
import EditProfile from '../screens/profile/EditProfile';
import About from '../screens/drawer/About';
import FAQs from '../screens/drawer/FAQs';
import Support from '../screens/drawer/Support';
import TermsAndConditions from '../screens/drawer/TermsAndConditions';
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
            <Stack.Screen name="FAQs" component={FAQs} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        </Stack.Navigator>

    );
}