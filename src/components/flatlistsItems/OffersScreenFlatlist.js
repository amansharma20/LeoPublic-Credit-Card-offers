/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image, Platform } from 'react-native';
import { applicationProperties } from '../../../application.properties';
import { SIZES } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';

export default function Offers(props) {
  const offer = props.offer
  return (
    <View style={styles.container}>
      <View style={styles.offerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{
            uri: applicationProperties.imageUrl + offer.LogoStoragePath,
          }}
            style={styles.imageSize} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{offer.OfferTitle}</Text>
          <Text style={styles.subtitleText}>{offer.OfferDescription}</Text>
        </View>
      </View>
    </View>
  )
};

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
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#172B4D',
    lineHeight: 20,
  },
  subtitleText: {
    color: '#7A869A',
    marginTop: 10,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    }),
  },
  imageSize: {
    width: Responsive.width(75),
    height: Responsive.height(75),
    resizeMode: 'contain',
  },
});
