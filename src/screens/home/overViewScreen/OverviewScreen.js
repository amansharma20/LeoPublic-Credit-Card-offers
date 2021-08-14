/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import { images } from '../../../constants';

export default function OverviewScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.innerContainer}>
        <View style={{
    alignItems: 'center',
    justifyContent: 'center'}}>
          <Text style={styles.headerText}>
          Issuing Bank
          </Text>
          <Text style={styles.subText}>
          Axis Bank
          </Text>
        </View>
          <View>
          <Image source={images.axis} style={styles.imageSize} />
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: SIZES.padding,
    paddingBottom: 300,
  },
  headerText: {
    color: '#797E96',
    fontSize: 18,
    lineHeight: 24,
  },
  subText: {
    color: '#1c1b1b',
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerContainer: {
    backgroundColor: '#f0e9ff',
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
    elevation: 5,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageSize: {width: 120, height: 80, resizeMode: 'contain'},
});
