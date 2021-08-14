/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../../constants/icons';
import { SIZES } from '../../constants';

const MyCardsScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftIconContainer}>
      <Image source={icons.menuIcon} style={styles.iconSizeLeft} />
      </View>
      <Text style={styles.headerText}>My Cards</Text>
      <View style={styles.rightIconContainer}>
        <Image source={icons.add} style={styles.iconSizeRight} />
      </View>
    </View>
  );
};

export default MyCardsScreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d2d8f',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
  },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  headerText: {fontSize: 24, fontWeight: '700', color: '#ffffff'},
  leftIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconContainer: {
    width: 44,
    height: 44,
    backgroundColor: '#7157a5',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
