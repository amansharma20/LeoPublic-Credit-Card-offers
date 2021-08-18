/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SIZES} from '../../constants';

const Offers = ({title, subtitle, image}) => (
  <View style={styles.container}>
    <View style={styles.offerContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.imageSize} />
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
    fontWeight: '700',
    color: '#172B4D',
    lineHeight: 20,
  },
  subtitleText: {
    color: '#7A869A',
    marginTop: 10,
  },
  imageSize: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Offers;