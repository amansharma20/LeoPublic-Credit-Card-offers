/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecommendedScreen from '../../screens/exploreScreen/RecommendedScreen/RecommendedScreen';
import DiscoverScreen from '../../screens/exploreScreen/DiscoverScreen/DiscoverScreen';
import { Platform } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function ExploreTopNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12, lineHeight: 18, fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
          }),
        },
        activeTintColor: '#060417',
        inactiveTintColor: '#6F7FAF',
        tabBarStyle: { backgroundColor: '#ffffff', borderTopLeftRadius: 32, borderTopRightRadius: 32, elevation: 0 },
      }}>
      <Tab.Screen name="RecommendedScreen" component={RecommendedScreen} options={{ tabBarLabel: 'Recommended' }} />
      <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} options={{ tabBarLabel: 'Discover' }} />
    </Tab.Navigator>
  );
}

export default ExploreTopNavigator;
