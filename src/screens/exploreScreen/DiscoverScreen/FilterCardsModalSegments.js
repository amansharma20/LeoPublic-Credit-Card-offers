/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Responsive } from '../../../utils/layouts/Layout';
import IssuerBank from './filterOptions/IssuerBank';
import CreditLimit from './filterOptions/CreditLimit';
import IncomeRange from './filterOptions/IncomeRange';
import Category from './filterOptions/Category';
import CardLevel from './filterOptions/CardLevel';
import JoiningFees from './filterOptions/JoiningFees';
import AnnualFees from './filterOptions/AnnualFees';

export default function FilterCardsModalSegments() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <View style={{flexDirection: 'row'}}>
      <ScrollView vertical style={styles.container}>
        <SegmentedControlTab
          values={['Issuer Bank', 'Credit Limit', 'Income Range', 'Category', 'Card Level', 'Joining Fees', 'Annual Fees']}
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
      {selectedIndex === 0 ? <IssuerBank /> : <></>}
      {selectedIndex === 1 ? <CreditLimit /> : <></>}
      {selectedIndex === 2 ? <IncomeRange /> : <></>}
      {selectedIndex === 3 ? <Category /> : <></>}
      {selectedIndex === 4 ? <CardLevel /> : <></>}
      {selectedIndex === 5 ? <JoiningFees /> : <></>}
      {selectedIndex === 6 ? <AnnualFees /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tabStyle: {
    alignItems: 'center',
    backgroundColor: '#f1f3f7',
    paddingVertical: Responsive.height(18),
    borderBottomWidth: 1,
    borderColor: '#dfe0e4',
  },
  firstTabStyle: {
      borderTopWidth: 0,
  },
  tabsContainerStyle: {
    flexDirection: 'column',
    width: '65%',
  },
  activeTabStyle: {
    backgroundColor: '#f1f3f7',
  },
  tabTextStyle: {
    color: '#172B4D',
    fontSize: 14,
    fontFamily:Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium'
    }),
  },
  activeTabTextStyle: {
    color: '#172B4D',
    fontSize: 14,
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
  },
});
