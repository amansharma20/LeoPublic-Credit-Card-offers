/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SIZES } from '../../constants';

const Overview = ({title, subtitle}) => (
  <View style={styles.container}>
    <LinearGradient style={styles.innerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SIZES.padding2,
  },
  innerContainer: {
    backgroundColor: '#f0e9ff',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3,
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  titleText: {
    fontSize: SIZES.h3,
    color: '#797E96',
    lineHeight: 20,
    fontFamily: 'Exo2Medium',
  },
  subtitleText: {
    fontSize: 18,
    color: '#1C1B1B',
    marginTop: 10,
    fontFamily: 'Exo2Bold',
  },
});

export default Overview;
