/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constants/';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import RecommendedScreen from '../screens/exploreScreen/RecommendedScreen/RecommendedScreen';
import DiscoverScreen from '../screens/exploreScreen/DiscoverScreen/DiscoverScreen';
import Rectangle from '../assets/svgs/Rectangle.svg';

export default function ExploreSegmentNavigator() {
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
        return console.log('explore');
      case 1:
        return console.log('explore2');
      // break;
      default:
        break;
    }
  };

  return (
      <View contentContainerStyle={{alignItems: 'center', backgroundColor: 'red'}} horizontal style={styles.container}>
        <SegmentedControlTab
          values={['Recommended', 'Discover']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          firstTabStyle={styles.firstTabStyle}
          contentContainerStyle={styles.contentContainerStyle}
        />
      {selectedIndex === 0 ? <Rectangle style={{marginLeft: 70}} /> : <></>}
      {selectedIndex === 0 ? <RecommendedScreen /> : <></>}
      {selectedIndex === 1 ? <Rectangle style={{marginLeft: 240}} /> : <></>}
      {selectedIndex === 1 ? <DiscoverScreen /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  tabStyle: {
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  tabsContainerStyle: {
    paddingHorizontal: 12,
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
  },
  tabTextStyle: {
    color: '#8c99bf',
    fontSize: SIZES.h3,
    // fontFamily: 'Exo2Medium',
  },
  activeTabTextStyle: {
    color: '#060417',
    // fontFamily: 'Exo2Bold',
  },
});
