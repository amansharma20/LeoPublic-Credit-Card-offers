/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../constants/theme';
import AboutHeader from '../../components/headers/AboutHeader';
import CommonHeader from '../../components/headers/CommonHeaderWithBackButton';

export default function Support() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {/* <AboutHeader /> */}
    <CommonHeader children="Help & Support" />
      <View style={styles.body}>
      <Text style={styles.headerText}>
      Help & Support
      </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur este lan adipiscing elit. Donec dictum massa ipsum, vitae mattis eros accumsan at. Vestibulum urna ex fes, congue eget scelerisque non, malesuada vitae orci. Nullam consectetur ornare tortor nec lacinia. Nam tortor elit, porttitor et tristique scelerisque, eleifend a libero. Aenean vel luctus mi.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  headerText: {fontSize: 16, fontFamily: 'Exo2SemiBold', color: '#1C1B1B', lineHeight: 24},
  body: {
    padding: SIZES.padding,
    backgroundColor: '#ffffff',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  bodyText: {
    color: '#797E96',
    fontSize: 14,
    lineHeight: 20,
    fontFamily:Platform.select({
      ios:'Exo2-Regular',
      android:'Exo2Regular'
    }),
    paddingTop: SIZES.padding2,
  },
});
