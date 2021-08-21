/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SIZES} from '../../constants';
import {Responsive} from '../../utils/layouts/Layout';
import MasterCardLogo from '../../assets/svgs/mastercardLogo.svg';
import BankLogo from '../../assets/svgs/bankLogo.svg';
import Code from '../../assets/svgs/code.svg';



export default function CreditCardImagesFlatlist(props){
  const card = props.card.item
  return(
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <ImageBackground
        style={styles.creditCardContainer}
        source={{uri: card.image}}
        imageStyle={styles.backgroundImageStyle}>
        <View style={styles.creditCardDetailsContainer}>
          <View style={styles.cardTopContainer}>
            <Text style={styles.cardTypeText}>Platinum Cards</Text>
            <BankLogo style={styles.bankLogo} />
          </View>
          <Code />
          <View style={styles.cardBottomContainer}>
            <Text style={styles.cardNumberText}>1800 **** **** ****</Text>
            <MasterCardLogo />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: Responsive.width(20),

  },
  creditCardContainer: {
    marginTop: 50,
    width: Responsive.width(290),
    height: Responsive.height(189),
    borderRadius: 12,
    elevation: 5,
    marginVertical: SIZES.padding,
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  creditCardImage: {
    paddingLeft: Responsive.width(24),
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  creditCardDetailsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  cardTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTypeText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Exo2Bold'
  },
  bankLogo: {
    marginLeft: 85,
  },
  cardBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  cardNumberText: {
      color: '#ffffff',
      fontSize: 18,
      fontFamily: 'Exo2Bold',
    },
});