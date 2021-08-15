/* eslint-disable prettier/prettier */
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

export default function HomeSegmentNavigator() {
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
        return (
          console.log('offers')
        );
      case 1:
        return (
          console.log('offers2')
          );
        case 2:
          return (
            console.log('offers3')
            );
            case 3:
          return (
            console.log('offers4')
            );
        // break;
      default:
        break;
    }
  };

  return (
    <View>
<ScrollView horizontal style={styles.container}>
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
      {selectedIndex === 0 ? <OffersScreen /> : <></> }
      {selectedIndex === 1 ? <OverviewScreen /> : <></> }
      {selectedIndex === 2 ? <ReviewsScreen /> : <></> }
      {selectedIndex === 3 ? <MileStonesScreen /> : <></> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: SIZES.padding,
  },
  tabStyle: {
    borderWidth: 0,
    marginRight: 36,
  },
  tabsContainerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignContent: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 2.5,
    borderColor: '#F7D071',
    marginRight: 36,
  },
  tabTextStyle: {
    color: '#6F7FAF',
    fontSize: 18,
    fontWeight: '500',
    // paddingRight: 36,
  },
  activeTabTextStyle: {
    color: '#060417',
    fontSize: 18,
    fontWeight: '700',
  },
});
