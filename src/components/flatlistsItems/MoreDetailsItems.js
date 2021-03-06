/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SIZES} from '../../constants';

const MoreDetails = ({title, subtitle}) => (
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
    flex: 1,
    marginHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    borderBottomColor: '#f1f2f7',
    borderBottomWidth: 0.5,
  },
  textContainer: {
    paddingHorizontal: 4,
  },
  titleText: {
    fontSize: SIZES.h3,
    color: '#797E96',
    lineHeight: 20,
    fontFamily:Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium'
    }),
  },
  subtitleText: {
    fontSize: 18,
    color: '#1C1B1B',
    marginTop: 2,
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
  },
});

export default MoreDetails;
