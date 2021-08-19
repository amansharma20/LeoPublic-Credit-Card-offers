/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {images, SIZES} from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';

const BestOffersFlatlist = ({title, subtitle, image}) => (
    <View style={styles.container}>
    <LinearGradient
      style={styles.gradientContainer}
      colors={['#EEE5FF', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <ImageBackground
        source={images.stockModel}
        style={styles.imageBackgroundSize}
        imageStyle={styles.image}>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <View
            style={styles.bankIconLogoOnImageContainer}>
            <Image
              source={images.axisBankWhite}
              style={styles.bankIconLogoOnImageSize}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={styles.textContainer}>
        <View style={{width: '70%'}}>
          <Text
            style={styles.titleText}>
            {title}
          </Text>
          <Text
            style={styles.subtitleText}>
            {subtitle}
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.showMoreText}>
              Show more
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressCircleContainer}>
          <Text
            style={styles.daysLeftText}>
            15{'\n'}days{'\n'}left
          </Text>
          <AnimatedCircularProgress
            style={styles.animatedCircleSize}
            size={34}
            width={3}
            fill={30}
            tintColor="#CD4D78"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#b9b9b9"
          />
        </View>
      </View>
      <View />
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
    container: {elevation: 0, width: Responsive.width(180), paddingVertical: SIZES.padding2, paddingHorizontal: 12},
    gradientContainer: {
        elevation: 8,
        width: Responsive.width(147),
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
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      },
      bankIconLogoOnImageSize: {
        width: Responsive.width(58),
        height: Responsive.height(17),
      },
      image: {borderRadius: 6, borderTopLeftRadius: 2, borderTopRightRadius: 2, resizeMode: 'stretch'},
      textContainer: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
      },
      titleText: {fontSize: 12, fontWeight: '700', color: '#454545'},
      subtitleText: {
        fontSize: 10,
        fontWeight: '400',
        paddingTop: 4,
        color: '#515151',
      },
      showMoreText: {
        fontSize: 7,
        fontWeight: '400',
        paddingTop: 4,
        color: '#4D2D8F',
        paddingBottom: 6,
      },
      progressCircleContainer: {width: '30%', flexDirection: 'row'},
      daysLeftText: {fontSize: 6, marginLeft: 10, textAlign: 'center'},
      animatedCircleSize: {marginLeft: -24, marginTop: -6},
});

export default BestOffersFlatlist;
