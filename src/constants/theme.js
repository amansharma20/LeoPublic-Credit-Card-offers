/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#3511A3', // New
  secondary: '#cacfd9', // Gray
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#eff2f5',
  gray: '#8b9097',
  appTheme: '#3511A3',
  appBackgroundColor: '#fff',
  appTextColor: '#101010',
  light: '#EDEDEB',
  darkgray: '#797788',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 12,
  paddingHome: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  mediumH1: {
    fontFamily: 'Exo2Medium', 
    fontSize: SIZES.h1, lineHeight: 36},
  mediumH2: {
    fontFamily: 'Exo2Medium', 
    fontSize: SIZES.h2, lineHeight: 30},
  mediumH3: {
    fontFamily: 'Exo2Medium', 
  fontSize: SIZES.h3, lineHeight: 22},
  mediumH4: {
    fontFamily: 'Exo2Medium',
     fontSize: SIZES.h4, lineHeight: 22},
  boldH1: {
    fontFamily: 'Exo2Bold', 
  fontSize: SIZES.body1, lineHeight: 36},
  boldH2: {
    fontFamily: 'Exo2Bold', 
  fontSize: SIZES.body2, lineHeight: 30},
  boldH3: {
    fontFamily: 'Exo2Bold', 
  fontSize: SIZES.body3, lineHeight: 22},
  boldH4: {
    fontFamily: 'Exo2Bold', 
  fontSize: SIZES.body4, lineHeight: 22},
};


const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
