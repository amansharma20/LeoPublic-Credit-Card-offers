/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constants/';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BestOffers from '../screens/offersScreen/bestOffers/BestOffers';
import LatestOffers from '../screens/offersScreen/latestOffers/LatestOffers';
import AllOffers from '../screens/offersScreen/allOffers/AllOffers';
import BottomTabOffersScreenModal from '../screens/offersScreen/BottomTabOffersScreenModal';
import Rectangle from '../assets/svgs/Rectangle.svg';

export default function OffersScreenItemDetailsNavigator() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log('selectedIndex');
  console.log(selectedIndex);
  console.log('selectedIndex');
  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
    console.log(index);
    switch (index) {
      case 0:
        return console.log('offers');
      case 1:
        return console.log('offers2');
      case 2:
        return console.log('offers3');
      case 3:
        return console.log('offers4');
      // break;
      default:
        break;
    }
  };

  return (
    <View style={{ alignItems: 'center'}}>
      <View contentContainerStyle={{alignItems: 'center'}} style={styles.container}>
        <SegmentedControlTab
          values={['Offer Details', 'More Offers']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          firstTabStyle={styles.firstTabStyle}
        />
      </View>
      {selectedIndex === 0 ? <Rectangle style={{marginLeft: -190}} /> : <></>}
      {selectedIndex === 0 ? <BottomTabOffersScreenModal /> : <></>}
      {/* or more offers */}
      {selectedIndex === 1 ? <Rectangle style={{marginLeft: 170}} /> : <></>}
      {selectedIndex === 1 ? <LatestOffers /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  tabStyle: {
    borderWidth: 0,
  },
  tabsContainerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignContent: 'center',
    borderWidth: 0,
    alignItems: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  tabTextStyle: {
    color: '#6F7FAF',
    fontSize: 16,
    fontFamily: Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium',
    }),
  },
  activeTabTextStyle: {
    color: '#060417',
    fontSize: 16,
    fontFamily: Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold',
    }),
  },
});
