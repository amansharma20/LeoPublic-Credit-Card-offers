/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { SIZES } from '../../constants';

export default function BottomTabOffersScreenModal(props) {

  const offer = props.offer;

  return (
    <View style={styles.container}>
      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Offer Title</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.OfferTitle}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Offer Description</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.OfferDescription}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Expiry Date</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.ExpiryDate}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Eligibility</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.Eligibility}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Platform</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.Platform}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Terms & Conditions</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.TermsAndConditions}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Offer Code (if applicable)</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.OfferCode}</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Link to Offer Details</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{offer.LinkToOfferDetails}</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: SIZES.padding2,
    width: '100%',
    paddingBottom: 50,
  },
  body: {
    paddingHorizontal: SIZES.padding,
  },
  textContainer: {
    paddingHorizontal: 4,
  },
  textContainerMain: {
    marginTop: 24,
  },
  titleText: {
    fontSize: 12,
    color: '#797E96',
    lineHeight: 20,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
    marginLeft: 10,
  },
  subtitleText: {
    fontSize: SIZES.h4,
    color: '#172B4D',
    marginTop: 2,
    marginLeft: 10,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
