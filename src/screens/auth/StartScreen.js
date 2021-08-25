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
      <View style={styles.body}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.subTitleStyle}>
          Evaluate, Manage & Optimise your{'\n'}Credit Cards
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
                marginTop: 0,
              },
            ]}>
            <Text
              style={{
                color: '#4D2D8F',
                fontSize: 16,
                fontFamily:Platform.select({
                  ios:'Exo2-Bold',
                  android:'Exo2Bold'
                }),
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
            <Text style={{color: 'white', fontSize: 16,
            fontFamily:Platform.select({
              ios:'Exo2-Bold',
              android:'Exo2Bold'
            }),
            }}>
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
    width: '100%',
    //backgroundColor: '#F2F2F2',
    borderRadius: 10,
    height: 46,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding2,
    marginTop: screenHeight / 6,
  },
  body: {
    flex: 1, width: '100%', paddingHorizontal: SIZES.padding2,
  },
  headerText: {
    fontSize: 36,
    color: COLORS.white,
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
    marginTop: screenHeight / 3,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  subTitleStyle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
    marginTop: 10,
    fontFamily:Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium'
    }),
  },
});
