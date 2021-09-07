/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import CommonHeaderWithBackButton from '../../components/headers/CommonHeaderWithBackButton';
import { images } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { Responsive } from '../../utils/layouts/Layout';
import Toast from 'react-native-toast-message';

export default function NewToCreditCards() {
  const navigation = useNavigation();
  
  const featureInDevelopment = ()=>{
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Hi,',
      text2:'This feature is under development. Will be available in next build.',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  }


  return (
    <View style={styles.container}>
      <CommonHeaderWithBackButton children="New to Credit Cards?" />
      <View style={styles.body}>
        <View>
          <Text style={styles.headerText}>
            Let's dwell deeper into the Credit Card Universe
          </Text>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Educate')}>
              <LinearGradient
                colors={['#fcfcff', '#f2ecff']}
                style={styles.gradientContainer}>
                <ImageBackground
                  imageStyle={styles.gradientContainerImageBackground}
                  source={images.creditCardLight}
                  style={styles.contentContainer}>
                  <Image
                    source={images.educateCreditCard}
                    style={styles.containerIcon}
                  />
                  <Text style={styles.containerHeaderText}>Educate</Text>
                  <Text numberOfLines={3} style={styles.containerSubtitleText}>
                    Know more about Credit Cards
                  </Text>
                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CreditProfile')}>
              <LinearGradient
                colors={['#fcfcff', '#f2ecff']}
                style={styles.gradientContainer}>
                <ImageBackground
                  imageStyle={styles.gradientContainerImageBackground}
                  source={images.creditCardLight}
                  style={styles.contentContainer}>
                  <Image
                    source={images.educateCreditCard}
                    style={styles.containerIcon}
                  />
                  <Text style={styles.containerHeaderText}>Explore</Text>
                  <Text numberOfLines={3} style={styles.containerSubtitleText}>
                    Figure the Credit Cards Best Suited for you
                  </Text>
                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={()=> featureInDevelopment()} >
              <LinearGradient
                colors={['#fcfcff', '#f2ecff']}
                style={styles.gradientContainer}>
                <ImageBackground
                  imageStyle={styles.gradientContainerImageBackground}
                  source={images.creditCardLight}
                  style={styles.contentContainer}>
                  <Image
                    source={images.educateCreditCard}
                    style={styles.containerIcon}
                  />
                  <Text style={styles.containerHeaderText}>Earn</Text>
                  <Text numberOfLines={3} style={styles.containerSubtitleText}>
                    Identify Best Offers on Credit Cards
                  </Text>
                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> featureInDevelopment()}>
              <LinearGradient
                colors={['#fcfcff', '#f2ecff']}
                style={styles.gradientContainer}>
                <ImageBackground
                  imageStyle={styles.gradientContainerImageBackground}
                  source={images.creditCardLight}
                  style={styles.contentContainer}>
                  <Image
                    source={images.educateCreditCard}
                    style={styles.containerIcon}
                  />
                  <Text style={styles.containerHeaderText}>Evolve</Text>
                  <Text numberOfLines={3} style={styles.containerSubtitleText}>
                    Apply for & Avail your First Credit Card
                  </Text>
                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.skipButtonContainer} onPress={()=> navigation.navigate('BottomTabBarNavigator')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  headerText: {
    fontSize: 22,
    color: '#797E96',
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold',
    }),
  },
  gradientContainer: {
    width: Responsive.width(143),
    height: Responsive.height(185),
    borderRadius: 16,
    marginHorizontal: 10,
  },
  gradientContainerImageBackground: {
    width: 74,
    height: 77,
    marginLeft: 60,
    resizeMode: 'contain',
  },
  containerIcon: { width: 36, height: 36, resizeMode: 'contain' },
  containerHeaderText: {
    fontSize: 18,
    color: '#4D2D8F',
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold',
    }),
  },
  contentContainer: {
    justifyContent: 'space-around',
    borderColor: '#573897',
    borderWidth: 1,
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  containerSubtitleText: {
    fontSize: 12,
    width: 100,
    color: '#797E96',
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold',
    }),
  },
  imageContainerSection: {
    backgroundColor: 'red',
    width: 150,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex: 1,
    padding: SIZES.padding,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '10%',
  },
  imageContainer: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  skipButtonContainer: {
    justifyContent: 'flex-end',
    bottom: '8%',
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
  },
  skipButtonText: {
    fontSize: 16,
    color: '#4D2D8F',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
