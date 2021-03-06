/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MenuIcon />
        </TouchableOpacity>
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
    marginTop: Platform.select({
      ios: 30,
      android: 0,
    }),
  },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  headerText: {fontSize: 24,
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
     color: '#ffffff', paddingLeft: '26%'},
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
