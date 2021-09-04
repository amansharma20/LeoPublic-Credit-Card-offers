/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES, icons } from '../../constants';

export default function CardHolder() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.header}>
            <Image source={icons.backButton} style={styles.backButtonSize} />
          </View>
        </TouchableOpacity>
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Are you a Credit Card Holder?</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddCardScreen')}
            >
              <View style={styles.yesButtonContainer}>
                <Text style={styles.yesButtonText}>Yes, I am</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('NewToCreditCards')}
            >
              <View style={styles.noButtonContainer}>
                <Text style={styles.noButtonText}>No, I am not</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
    marginTop: Platform.select({
      ios: 30,
      android: 0,
    }),
    flex: 1,
  },
  backButtonSize: { width: 24, height: 24 },
  headerTextContainer: {
    paddingVertical: 20,
  },
  headerText: {
    fontSize: SIZES.h1,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  subTitleText: {
    fontSize: SIZES.h3,
    marginTop: 12,
    color: '#797E96',
  },
  buttonsContainer: {
    marginBottom: 80,
  },
  yesButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d2d8f',
    borderRadius: 10,
    height: 48,
  },
  noButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 48,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#4d2d8f',
  },
  yesButtonText: {
    fontSize: SIZES.h3,
    color: '#FFFFFF',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  noButtonText: {
    fontSize: SIZES.h3,
    color: '#4d2d8f',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
