/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
    CardStyleInterpolators, createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
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
import { View } from 'react-native-animatable';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import BasicDetailsNavigator from './BasicDetailsNavigator';
import MyAsyncStorage from '../persistence/storage/MyAsyncStorage';
const Stack = createStackNavigator();

export default function StackNavigator() {

    const [showOneTimeScreen, setShowOneTimeScreen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        checkUser();

        return () => {
            //CLEAR NOW
        };
    },[showOneTimeScreen]);

    const checkUser = async () => {
        let user = await MyAsyncStorage.getData('newUserStatus');
        setShowOneTimeScreen(user.newUser);
        setLoading(false);
    };

    if (loading)
        {return (
            <View style={{ marginBottom: 12, alignItems: 'center' }}>
                <SkeletonPlaceholder>
                    <View style={{ width: 289, height: 169, borderRadius: 32, marginTop: 60 }} />
                    <View horizontal style={{ flexDirection: 'row', marginTop: 60, width: 250 }}>
                        <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
                        <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
                        <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
                        <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
                    </View>
                    <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 90 }} />
                    <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 20 }} />
                    <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 20 }} />
                </SkeletonPlaceholder>
            </View>
        );}

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                keyboardHidesTabBar: true,

            }}
        >
            {showOneTimeScreen && (
                <Stack.Screen name="BasicDetailsNavigator" component={BasicDetailsNavigator} />
            )}
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
