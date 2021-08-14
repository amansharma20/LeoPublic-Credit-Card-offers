/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';

export default function ReviewsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>ReviewsScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    padding: SIZES.padding,
  },
});
