/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { icons, SIZES } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';
import MasterCardLogo from '../../assets/svgs/mastercardLogo.svg';
import BankLogo from '../../assets/svgs/bankLogo.svg';
import Code from '../../assets/svgs/code.svg';
import { applicationProperties } from '../../../application.properties';
import { useMutation } from '@apollo/client';
import { GQLMutation } from '../../persistence/mutation/Mutation';

export default function CreditCardImagesFlatlist(props) {
  const card = props.card.item;
  const cardDetails = card.BankCard;
  const [showModal, setShowModal] = useState(false);

  const [deleteCard, { data, error}] = useMutation(GQLMutation.DELETE_USER_CARD);
  
  const deleteUserCard = ()=>{
    deleteCard({ variables: { Id: card.Id} });
    if(data && data.DeleteCustomerUserBankCardMutation && data.DeleteCustomerUserBankCardMutation.DeleteCustomerUserBankCard == "Deleted"){
      setShowModal(false)
    }
  }


  return (
    <TouchableOpacity
      onLongPress={() => setShowModal(true)}
      activeOpacity={0.9}
      style={styles.container}>
      <ImageBackground
        style={styles.creditCardContainer}
        source={{
          uri: applicationProperties.imageUrl + cardDetails.ImageStoragePath,
        }}
        imageStyle={styles.backgroundImageStyle}>
        <View style={styles.creditCardDetailsContainer}>
          <View style={styles.cardTopContainer}>
            <Text numberOfLines={2} style={styles.cardTypeText}>
              {cardDetails.CardName}
            </Text>
            <Image source={images.axisBankWhite} style={styles.bankLogo} />
          </View>
          <Code />
          <View style={styles.cardBottomContainer}>
            <Text style={styles.cardNumberText}>
              {card.CardNumber}** **** ****
            </Text>
            <MasterCardLogo />
          </View>
        </View>
      </ImageBackground>
      {showModal && (
        <Modal
          animationType='slide'
          transparent={true}
          showModal={showModal}
          onRequestClose={() => setShowModal(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View>
                <Image
                  source={icons.removeCardModalIcon}
                  style={{
                    width: Responsive.width(75),
                    height: Responsive.height(75),
                  }}
                />
              </View>
              <View>
                <Text style={styles.modalSubText}>
                  Do you want to remove this card?
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={styles.noModalButton}>
                    <Text style={styles.noModalButtonText}>No</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  deleteUserCard()
                  //
                }}>
                  <View style={styles.yesModalButton}>
                    <Text style={styles.yesModalButtonText}>Yes</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: Responsive.width(20),
  },
  creditCardContainer: {
    width: Responsive.width(285),
    height: Responsive.height(190),
    borderRadius: 12,
    // elevation: 1,
    marginVertical: SIZES.padding2,
    paddingVertical: 4,
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
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
    width: 120,
  },
  bankLogo: {
    width: 80, height: 40, resizeMode: 'contain'
  },
  cardBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  cardNumberText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    width: '75%',
    height: '40%',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 20,
    marginVertical: '55%',
    marginHorizontal: '12%',
    justifyContent: 'space-around',
  },
  modalSubText: {
    color: '#797E96',
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold'
    }),
  },
  noModalButton: {
    backgroundColor: '#4D2D8F',
    width: 220,
    height: 35,
    marginBottom: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesModalButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ED4C5C',
    width: 220,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noModalButtonText: {
    color: '#ffffff',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
  yesModalButtonText: {
    color: '#ED4C5C',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
});
