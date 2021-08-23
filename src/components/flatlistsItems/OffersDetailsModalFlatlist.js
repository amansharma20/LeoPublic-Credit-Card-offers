/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SIZES} from '../../constants';

const OffersDetailsModalFlatlist = ({title, subtitle}) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.subtitleText}>{subtitle}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding2,
  },
  textContainer: {
    paddingHorizontal: 4,
  },
  titleText: {
    fontSize: 12,
    color: '#797E96',
    lineHeight: 20,
    // fontFamily: 'Exp2Medium',
  },
  subtitleText: {
    fontSize: SIZES.h4,
    color: '#172B4D',
    marginTop: 2,
    // fontFamily: 'Exo2Bold',
  },
});

export default OffersDetailsModalFlatlist;
