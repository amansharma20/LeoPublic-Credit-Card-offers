/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import { SIZES } from '../../../constants/theme';
import { Responsive } from '../../../utils/layouts/Layout';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { applicationProperties } from '../../../../application.properties';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';


export default function OverviewScreen(props) {
  const cardData = props.cardData;;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <LinearGradient style={styles.innerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Issuing Bank</Text>
            <Text style={styles.subText}>{cardData.BankCard.Bank.Name}</Text>
          </View>
          <View>
            <Image
              source={{
                uri: applicationProperties.imageUrl + cardData.BankCard.Bank.LogoStoragePath,
              }} style={styles.imageSize} />
          </View>
        </LinearGradient>
      </View>
      <View>
        <View style={styles.flatlistContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.flatlistDetailsContainer}>
              <LinearGradient style={styles.flatlistDetailsInnerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                  <Text style={styles.titleText}>Card Program</Text>
                </View>
                <View>
                  <Text style={styles.subtitleText}>{cardData.BankCard.CardProgram}</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.flatlistDetailsContainer}>
              <LinearGradient style={styles.flatlistDetailsInnerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                  <Text style={styles.titleText}>Joining Fees</Text>
                </View>
                <View>
                  <Text style={styles.subtitleText}>??? {cardData.BankCard.JoiningFees}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>

            <View style={styles.flatlistDetailsContainer}>
              <LinearGradient style={styles.flatlistDetailsInnerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                  <Text style={styles.titleText}>Annual Fees</Text>
                </View>
                <View>
                  <Text style={styles.subtitleText}>{cardData.BankCard.AnnualFees}</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.flatlistDetailsContainer}>
              <LinearGradient style={styles.flatlistDetailsInnerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                  <Text style={styles.titleText}>Interest Rate</Text>
                </View>
                <View>
                  <Text style={styles.subtitleText}>{cardData.BankCard.InterestRate}%</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>

            <View style={styles.flatlistDetailsContainer}>
              <LinearGradient style={styles.flatlistDetailsInnerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                  <Text style={styles.titleText}>Credit Limit</Text>
                </View>
                <View>
                  <Text style={styles.subtitleText}>??? {cardData.BankCard.CreditLimit}</Text>
                </View>
              </LinearGradient>
            </View>
            <View style={styles.flatlistDetailsContainer}>
              <LinearGradient style={styles.flatlistDetailsInnerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                  <Text style={styles.titleText}>Card Level</Text>
                </View>
                <View>
                  <Text style={styles.subtitleText}>{cardData.BankCard.CardLevel}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('CardOverviewScreen',{
            card: cardData
          })} activeOpacity={0.85}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>More Details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* MORE DETAILS MODAL  */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    marginTop: Platform.select({
      ios: 20,
      android: 20,
    }),
  },
  body: {
    paddingTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#f0e9ff',
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
    elevation: 3,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    borderWidth: 1,
    borderColor: '#4f2f90',
  },
  headerTextContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#797E96',
    fontSize: 18,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular',
    }),
  },
  subText: {
    color: '#1c1b1b',
    fontSize: 20,
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold',
    }),
    width: 200,
  },
  imageSize: {
    width: Responsive.width(80),
    height: Responsive.width(80),
    resizeMode: 'contain',
    tintColor: '#737373'
  },
  flatlistContainer: {
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
  },
  contentContainerStyle: {
    paddingBottom: SIZES.padding2,
  },
  modalContentContainerStyle: {
    paddingBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#f1eef6',
    marginHorizontal: 90,
    padding: 10,
    marginTop: 16,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#4D2D8F',
    fontSize: 14,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  modalContainer: {
    flex: 1,
    marginTop: Platform.select({
      ios: 30,
      android: 0,
    }),
    marginHorizontal: Platform.select({
      ios: 10,
      android: 0,
    }),
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
    alignItems: 'center',
  },
  iconSizeLeft: { width: 34, height: 34 },
  iconSizeRight: { width: 28, height: 28 },
  modalHeaderText: {
    fontSize: 24,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#4D2D8F',
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
    backgroundColor: '#dbd5e9',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlistDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SIZES.padding2,
    width: ScreenWidth / 2.5,

  },
  flatlistDetailsInnerContainer: {
    backgroundColor: '#f0e9ff',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3,
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,

    borderWidth: 1,
    borderColor: '#4f2f90',
  },
  titleText: {
    fontSize: SIZES.h3,
    color: '#797E96',
    lineHeight: 20,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular',
    }),
  },
  subtitleText: {
    fontSize: 18,
    color: '#1C1B1B',
    marginTop: 3,
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold',
    }),
  },
  textContainerMain: {
    marginTop: 24,
  },
});
