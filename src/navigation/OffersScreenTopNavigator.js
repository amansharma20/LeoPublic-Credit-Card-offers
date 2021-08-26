/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'; 
import RecommendedScreen from '../screens/exploreScreen/RecommendedScreen/RecommendedScreen';
import DiscoverScreen from '../screens/exploreScreen/DiscoverScreen/DiscoverScreen';
import BestOffers from '../screens/offersScreen/bestOffers/BestOffers';
import LatestOffers from '../screens/offersScreen/latestOffers/LatestOffers';
import AllOffers from '../screens/offersScreen/allOffers/AllOffers';
import { Platform } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function OffersScreenTopNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="All"
      tabBarOptions={{
        labelStyle: { fontSize: 12, lineHeight: 18, fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold',
    }), },
        activeTintColor: '#060417',
        inactiveTintColor: '#6F7FAF',
        style: { backgroundColor: '#ffffff', borderTopLeftRadius: 32, borderTopRightRadius: 32, elevation: 0 },
  }}>
      <Tab.Screen name="BestOffers" component={BestOffers} options={{ tabBarLabel: 'Best Offers' }} />
      <Tab.Screen name="LatestOffers" component={LatestOffers} options={{ tabBarLabel: 'Latest Offers' }} />
      <Tab.Screen name="AllOffers" component={AllOffers} options={{ tabBarLabel: 'All Offers' }} />
    </Tab.Navigator>
  );
}

export default OffersScreenTopNavigator;
