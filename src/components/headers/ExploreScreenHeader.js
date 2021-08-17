/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../../constants/icons';
import { SIZES } from '../../constants';
import MenuIcon from '../../assets/svgs/menuIcon.svg';
import AddIcon from '../../assets/svgs/addIcon.svg';

const Explore = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftIconContainer}>
      <MenuIcon />
      </View>
      <Text style={styles.headerText}>Explore</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d2d8f',
    flexDirection: 'row',
    width: '100%',
    padding: SIZES.padding2,
    alignItems: 'center',
  },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  headerText: {fontSize: 24, fontWeight: '700', color: '#ffffff', paddingLeft: '26%',},
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
