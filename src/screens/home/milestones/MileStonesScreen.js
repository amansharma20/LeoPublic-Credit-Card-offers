/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { SIZES } from '../../../constants/theme';
import { Responsive } from '../../../utils/layouts/Layout';

export default function MileStonesScreen(props) {
  const cardData = props.cardData;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.milestoneContainer}>
          <Text style={styles.milestoneText}>
            {cardData.BankCard.MilestoneBenefits}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.select({
      ios: 20,
      android: 20,
    }),
  },
  body: {
    padding: SIZES.padding,
    paddingBottom: Responsive.height(300),
  },
  milestoneContainer: {
    backgroundColor: '#F9F4F2',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    elevation: 3,
    borderRadius: 13,
  },
  milestoneText: {
    fontSize: SIZES.h3,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular'
    }),
  },
});
