/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image, Platform } from 'react-native';
import { SIZES } from '../../constants';

const Offers = ({ title, subtitle, image }) => (
  <View style={styles.container}>
    <View style={styles.offerContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.imageSize} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  offerContainer: {
    backgroundColor: '#F9F4F2',
    marginVertical: 8,
    borderRadius: 15,
    flexDirection: 'row',
    padding: SIZES.padding2,
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {},
  textContainer: {
    width: '67.5%',
    paddingHorizontal: SIZES.padding2,
  },
  titleText: {
    fontSize: 14,
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold',
    }),
    color: '#172B4D',
    lineHeight: 20,
  },
  subtitleText: {
    color: '#7A869A',
    marginTop: 10,
    fontFamily:Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium'
    }),
  },
  imageSize: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
});

export default Offers;
