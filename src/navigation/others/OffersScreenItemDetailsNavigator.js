/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BottomTabOffersScreenModal from '../../screens/offersScreen/BottomTabOffersScreenModal';
import Rectangle from '../../assets/svgs/Rectangle.svg';
import MoreOffers from '../../screens/offersScreen/latestOffers/MoreOffers';

export default function OffersScreenItemDetailsNavigator(props) {

  const offer = props.offer;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);

  };

  return (
    <View style={{
      alignItems: 'center',
      backgroundColor: '#ffffff',
    }}>
      <View contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
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
      {selectedIndex === 0 ? <Rectangle style={{ marginLeft: -190 }} /> : <></>}
      {selectedIndex === 0 ? <BottomTabOffersScreenModal offer={offer} /> : <></>}
      {/* or more offers */}
      {selectedIndex === 1 ? <Rectangle style={{ marginLeft: 170 }} /> : <></>}
      {selectedIndex === 1 ? <MoreOffers offer={offer} /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
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
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    }),
  },
  activeTabTextStyle: {
    color: '#060417',
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
});
