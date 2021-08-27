/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constants/';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import OffersScreen from '../screens/home/offersScreen/OffersScreen';
import OverviewScreen from '../screens/home/overViewScreen/OverviewScreen';
import ReviewsScreen from '../screens/home/reviewsScreen/ReviewsScreen';
import MileStonesScreen from '../screens/home/milestonesScreen/MileStonesScreen';
import BestOffers from '../screens/offersScreen/bestOffers/BestOffers';
import LatestOffers from '../screens/offersScreen/latestOffers/LatestOffers';
import AllOffers from '../screens/offersScreen/allOffers/AllOffers';
import { Responsive } from '../utils/layouts/Layout';

export default function OffersSegmentNavigator() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log('selectedIndex');
  console.log(selectedIndex);
  console.log('selectedIndex');
  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
  };

  return (
    <View style={{ alignItems: 'center'}}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}} horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
        <SegmentedControlTab
          values={['Best Offers', 'Latest Offers', 'All Offers']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          firstTabStyle={styles.firstTabStyle}
        />
      </ScrollView>
      {selectedIndex === 0 ? <BestOffers /> : <></>}
      {selectedIndex === 1 ? <LatestOffers /> : <></>}
      {selectedIndex === 2 ? <AllOffers /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    paddingTop: SIZES.padding,
  },
  tabStyle: {
    borderWidth: 0,
    paddingBottom: 2,
    paddingVertical: 12,
    marginRight: 36,
    width: Responsive.width(105),
    alignItems: 'center',
  },
  tabsContainerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignContent: 'center',
    alignItems: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 5,
    borderColor: '#F7D071',
    marginRight: 36,
    borderRadius: 5,
  },
  tabTextStyle: {
    color: '#6F7FAF',
    fontSize: 16,
    fontFamily:Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium'
    }),
  },
  activeTabTextStyle: {
    color: '#060417',
    fontSize: 16,
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
  },
});
