/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

export default function BestOffersFlatlist(props) {

  const navigation = useNavigation();
  const offer = props.offer;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('OffersScreenItemDetails', {
          offer: offer,
        })}>
        <View style={styles.itemContainer}>
          {/* <Image
            source={offer.LogoStoragePath == undefined ? { uri: 'https://picsum.photos/seed/picsum/200/300' } : { uri: applicationProperties.imageUrl + offer.LogoStoragePath }}
            style={styles.imageBackgroundSize}
            imageStyle={styles.image} /> */}
          <View
            style={[styles.imageBackgroundSize, { backgroundColor: COLORS.lightGray, alignItems: 'center', justifyContent: 'center' }]}
          >
            <Text style={{
              color: '#0f0f00', fontFamily: Platform.select({
                ios: 'Exo2-Bold',
                android: 'Exo2Bold',
              }),
              fontSize: 21,
              textTransform: 'capitalize'
            }}>
              {offer.OfferTitle}</Text>
          </View>

          <View style={styles.textContainer}>
            <View>
              <Image source={images.axis} style={{ width: Responsive.width(48), height: Responsive.height(12), resizeMode: 'contain' }} />
            </View>
            <View style={{ paddingTop: 5, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#C8C6C6' }}>
              <Text style={{
                color: '#000000', fontFamily: Platform.select({
                  ios: 'Exo2-Medium',
                  android: 'Exo2Medium',
                }),
                fontSize: 12,
                textTransform: 'capitalize'
              }}>
                The American Express Membership Rewards Credit Card
              </Text>
            </View>
            <View style={{ paddingTop: 12 }}>
              <Text style={styles.titleText}>{offer.OfferTitle}</Text>
              <Text style={styles.subtitleText}>{offer.OfferDescription}</Text>
              <TouchableOpacity>
                <Text style={styles.showMoreText}>Show more</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar
                progress={30 / 100}
                width={Responsive.width(130)}
                unfilledColor={'#eff0f2'}
                borderWidth={0}
                height={3}
                color={'#364FFB'}
              />
              <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                <Text style={{
                  color: '#000000', fontFamily: Platform.select({
                    ios: 'Exo2-Medium',
                    android: 'Exo2Medium',
                  }),
                  fontSize: 8,
                  marginTop: 2,
                }}>
                  15 Days Left
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.padding2,
  },
  itemContainer: {
    elevation: 8,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: '90%',
    backgroundColor: 'white'
  },
  imageBackgroundSize: {
    height: Responsive.height(62),
    resizeMode: 'stretch',
    // borderRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  bankIconLogoOnImageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  bankIconLogoOnImageSize: {
    width: Responsive.width(58),
    height: Responsive.height(17),
  },
  image: {
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'stretch',
  },
  textContainer: {
    // flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  titleText: {
    fontSize: 12,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#454545',
    textTransform: 'capitalize'
  },
  subtitleText: {
    fontSize: 10,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular',
    }),
    paddingTop: 4,
    color: '#515151',
  },
  showMoreText: {
    fontSize: 7,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular',
    }),
    paddingTop: 8,
    color: '#000000',
  },
  progressBarContainer: {
    marginTop: 10,
  },
  daysLeftText: {
    fontSize: 6, paddingLeft: 10, textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  modalContainer: {
    padding: SIZES.padding,
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  iconSizeLeft: { width: 34, height: 34 },
  iconSizeRight: { width: 28, height: 28 },
  modalHeaderText: {
    fontSize: 24,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#ffffff',
  },
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
  modalTitleText: {
    color: '#7A869A',
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  modalSubTitleText: {
    fontSize: SIZES.h3,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding2,
    borderBottomWidth: 1,
    borderColor: '#EDEAF2',
  },
  modalButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4D2D8F',
    width: Responsive.width(98),
    height: Responsive.height(28),
    borderRadius: 12,
  },
  modalMainBody: {

  },
  segmentContainer: {
    // flex: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: '#ffffff',
    paddingTop: SIZES.padding,
  },
  tabStyle: {
    borderWidth: 0,
    paddingBottom: 2,
    paddingVertical: 12,
    marginRight: 36,
    width: 99,
    alignItems: 'center',
  },
  tabsContainerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignContent: 'center',
    alignItems: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 5,
    // borderWidth: 0,
    borderColor: '#F7D071',
    marginRight: 36,
    borderRadius: 5,
  },
  tabTextStyle: {
    color: '#6F7FAF',
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  activeTabTextStyle: {
    color: '#060417',
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
