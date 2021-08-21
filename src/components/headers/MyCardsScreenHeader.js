/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../../constants/icons';
import { SIZES } from '../../constants';
import MenuIcon from '../../assets/svgs/menuIcon.svg';
import AddIcon from '../../assets/svgs/addIcon.svg';

const MyCardsScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftIconContainer}>
      <MenuIcon />
      </View>
      <Text style={styles.headerText}>My Cards</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddCardScreen')}>
      <View style={styles.rightIconContainer}>
        <AddIcon />
      </View>
      </TouchableOpacity>

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
    alignItems: 'center',
    marginTop:Platform.select({
      ios: 30,
      android: 0,
    }),
  },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  headerText: {fontSize: 24, color: '#ffffff', fontFamily: 'Exo2Bold'},
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
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
