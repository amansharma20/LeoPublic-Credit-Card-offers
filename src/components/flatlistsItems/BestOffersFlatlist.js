/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import { images, SIZES } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';
import { useNavigation } from '@react-navigation/native';
import { applicationProperties } from '../../../application.properties';

export default function BestOffersFlatlist(props) {

  const offer = props.offer;

  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('OffersScreenItemDetails', {
        offer: offer
      })}
    >
      <LinearGradient
        style={styles.gradientContainer}
        colors={['#EEE5FF', '#FFFFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <ImageBackground
          source={offer.LogoStoragePath == undefined ? { uri: 'https://picsum.photos/seed/picsum/200/300' } : { uri: applicationProperties.imageUrl + offer.LogoStoragePath }}
          style={styles.imageBackgroundSize}
          imageStyle={styles.image}>
          <View style={{ justifyContent: 'flex-end', flex: 1 }}>
            <View style={styles.bankIconLogoOnImageContainer}>
              <Image
                source={images.axisBankWhite}
                style={styles.bankIconLogoOnImageSize}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <View style={{ width: '70%' }}>
            <Text style={styles.titleText}>{offer.OfferTitle}</Text>
            <Text style={styles.subtitleText}>{offer.OfferDescription}</Text>
            <TouchableOpacity>
              <Text style={styles.showMoreText}>Show more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressCircleContainer}>
            <Text style={styles.daysLeftText}>
              15{'\n'}days{'\n'}left
            </Text>
            <AnimatedCircularProgress
              style={styles.animatedCircleSize}
              size={34}
              width={3}
              fill={30}
              tintColor="#CD4D78"
              backgroundColor="#b9b9b9"
            />
          </View>
        </View>
        <View />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    width: Responsive.width(180),
    paddingVertical: SIZES.padding2,
    paddingHorizontal: 12,
  },
  gradientContainer: {
    elevation: 8,
    width: Responsive.width(147),
    height: Responsive.height(223),
    borderRadius: 6,
  },
  imageBackgroundSize: {
    width: Responsive.width(147),
    height: Responsive.height(119),
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
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  titleText: {
    fontSize: 12,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
    color: '#454545'
  },
  subtitleText: {
    fontSize: 10,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular'
    }),
    paddingTop: 4,
    color: '#515151',
  },
  showMoreText: {
    fontSize: 7,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular'
    }),
    paddingTop: 4,
    color: '#4D2D8F',
    paddingBottom: 6,
  },
  progressCircleContainer: { flexDirection: 'row' },
  daysLeftText: {
    fontSize: 6, paddingLeft: 10, textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    })
  },
  animatedCircleSize: { marginLeft: -24, marginTop: -6 },
  modalContainer: {
    // paddingTop: Responsive.height(110),
    // justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0,0,0,0.5)',
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
      android: 'Exo2Bold'
    }),
    color: '#ffffff'
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
      android: 'Exo2Medium'
    })
  },
  modalSubTitleText: {
    fontSize: SIZES.h3,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    })
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
    alignItems: 'center'
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
      android: 'Exo2Medium'
    })
  },
  activeTabTextStyle: {
    color: '#060417',
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    })
  },
});
