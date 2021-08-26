/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SIZES } from '../../constants';
import MenuIcon from '../../assets/svgs/menuIcon.svg';
import { useNavigation } from '@react-navigation/native';

const OffersScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.leftIconContainer}>
      <MenuIcon />
      </TouchableOpacity>
      <Text style={styles.headerText}>Offers</Text>
      <TouchableOpacity>
      <View style={styles.rightIconContainer}>
        {/* <AddIcon /> */}
      </View>
      </TouchableOpacity>

    </View>
  );
};

export default OffersScreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d2d8f',
    flexDirection: 'row',
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
  headerText: {fontSize: 24, 
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
    color: '#ffffff'},
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
