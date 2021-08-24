/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import {Responsive} from '../../../utils/layouts/Layout';
import {applicationProperties} from '../../../../application.properties';

export default function MileStonesScreen(props) {
  const cardData = props.cardData;
  console.log(cardData);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.milestoneContainer}>
          <Text style={styles.milestoneText}>
            {/* Spend Rs.4 lakh in an anniversary{'\n'}year and earn 10,000 bonus reward{'\n'}
            points. For spending Rs.8 lakh, you{'\n'}
            will earn 30,000 reward points.{'\n'}
            The bonus reward points will be{'\n'}
            credited at the end of the{'\n'}anniversary year. */}
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
    marginTop:Platform.select({
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
    fontFamily: 'Exo2Regular',
  },
});
