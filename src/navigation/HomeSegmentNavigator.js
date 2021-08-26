/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constants/';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import OffersScreen from '../screens/home/offersScreen/OffersScreen';
import OverviewScreen from '../screens/home/overViewScreen/OverviewScreen';
import ReviewsScreen from '../screens/home/reviewsScreen/ReviewsScreen';
import MileStonesScreen from '../screens/home/milestonesScreen/MileStonesScreen';

export default function HomeSegmentNavigator(props) {
  const selectedCardData = props.selectedCard;
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
  };

  return (
    <View style={{marginTop:20}}>
      <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} style={styles.container}>
        <SegmentedControlTab
          values={['Offers', 'Overview', 'Reviews', 'Milestones']}
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
      {selectedIndex === 0 ? <OffersScreen cardData ={selectedCardData} /> : <></>}
      {selectedIndex === 1 ? <OverviewScreen cardData ={selectedCardData}/> : <></>}
      {selectedIndex === 2 ? <ReviewsScreen cardData ={selectedCardData} /> : <></>}
      {selectedIndex === 3 ? <MileStonesScreen cardData ={selectedCardData} /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:Platform.select({
      ios:30,
      android:30
    })
  },
  tabStyle: {
    borderWidth: 0,
    paddingBottom: 2,
    marginRight: 40,
  },
  tabsContainerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignContent: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
    // borderColor: '#F7D071',
    borderColor: '#247DFB',
    marginRight: 36, 
    // borderRadius: 5,
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
