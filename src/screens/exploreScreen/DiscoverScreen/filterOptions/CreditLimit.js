/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../../constants/index/';
import { Responsive } from '../../../../utils/layouts/Layout';

export default function CreditLimit() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={{
       fontFamily:Platform.select({
        ios:'Exo2-Bold',
        android:'Exo2Bold'
      }),
        }}>
        Credit Limit
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: Responsive.height(20),
  },
  body: {
      marginLeft: -70,
      padding: 12,
  },
  flatlistContainer: {
    paddingHorizontal: SIZES.padding,
  },
});
