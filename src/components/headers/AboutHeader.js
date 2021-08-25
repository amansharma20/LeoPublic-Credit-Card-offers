/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SIZES } from '../../constants';
import BackIconWhite from '../../assets/svgs/backButtonWhite.svg';
import { useNavigation } from '@react-navigation/native';


const AboutHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftIconContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackIconWhite />
      </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>About LEO</Text>
      <TouchableOpacity>
      <View style={styles.rightIconContainer}>
        {/* <AddIcon /> */}
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default AboutHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d2d8f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
    alignItems: 'center',
  },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  headerText: {fontSize: 22, 
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
