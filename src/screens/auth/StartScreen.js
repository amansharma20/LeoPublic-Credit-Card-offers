/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES, COLORS, images} from '../../constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={images.startScreenBackgroundImage}
      style={styles.MainContainer}>
      <View style={{paddingHorizontal: SIZES.padding2}}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.subTitleStyle}>
          Evaluate, Manage & Optimise yourCredit Cards
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <View
            style={[
              styles.inputView,
              {
                alignItems: 'center',
                backgroundColor: 'white',
                marginTop: 15,
              },
            ]}>
            <Text
              style={{
                color: COLORS.PrimaryColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View
            style={[
              styles.inputView,
              {
                alignItems: 'center',
                marginTop: 10,
                borderWidth: 1,
                borderColor: 'white',
              },
            ]}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  inputView: {
    width: '90%',
    //backgroundColor: '#F2F2F2',
    borderRadius: 10,
    height: 46,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding2,
    marginTop: screenHeight / 6,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: SIZES.padding2,
    color: COLORS.white,
    marginTop: screenHeight / 3,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  subTitleStyle: {
    fontSize: 18,
    fontWeight: 'normal',
    paddingHorizontal: SIZES.padding2,
    color: 'white',
    marginTop: 10,
  },
});
