/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { SIZES } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';
import MasterCardLogo from '../../assets/svgs/mastercardLogo.svg';
import BankLogo from '../../assets/svgs/bankLogo.svg';
import Code from '../../assets/svgs/code.svg';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CrossWithBackground from '../../assets/svgs/crossWithBackground.svg';
import CompareModalItemFlatlist from './CompareModalItemFlatlist';
import COMPAREMODALDATA from '../../assets/dummyData/compareModalData';
import { applicationProperties } from '../../../application.properties';

export default function RecommendedScreenFlatlist(props) {
  const card = props.cards;
  const [checkboxState, setCheckboxState] = useState(false);
  const [cardClicked, setCardClicked] = useState(0);

  const onCardClick = () => {
    setCheckboxState(!checkboxState, cardClicked);
    console.log(cardClicked);
    if (cardClicked < 2) {
      setCardClicked(cardClicked + 1);
    } else {
      console.log('show modal');
      setShowModal(true);
    }
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onCardClick}
    >
      <View style={styles.container}>
        <View style={styles.cardContainerBody}>
          <ImageBackground
            style={styles.creditCardContainer}
            source={{ uri: applicationProperties.imageUrl + card.ImageStoragePath }}
            imageStyle={styles.backgroundImageStyle}>
            <View>
              <BouncyCheckbox
                style={styles.checkBoxContainer}
                isChecked={checkboxState}
                disableBuiltInState
                onPress={onCardClick}
                // onPress={() => setCheckboxState(!checkboxState)}
                size={20}
                iconStyle={styles.checkBoxIconStyle}
                fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
              />
            </View>
            <View style={styles.creditCardDetailsContainer}>
              <View style={styles.cardTopContainer}>
                <Text style={styles.cardTypeText}>{card.CardName}</Text>
                <BankLogo style={styles.bankLogo} />
              </View>
              <Code />
              <View style={styles.cardBottomContainer}>
                <Text style={styles.cardNumberText}>1800 **** **** ****</Text>
                {/* <Text style={{color: '#ffffff'}}>
                card type icon
            </Text> */}
                <MasterCardLogo />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.cardContainerBodyPadding}>
            <View>
              <Text numberOfLines={2} style={styles.rewardsText}>{card.RewardBoosterSectors}</Text>
            </View>
            <View style={styles.feeContainer}>
              <Text style={styles.feeText}>Joining Fee: ₹{card.JoiningFees}</Text>
              <Text style={styles.feeText}>Annual Fee: ₹{card.AnnualFees}</Text>
            </View>
          </View>
        </View>
        {showModal && (
          <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            showModal={showModal}
            onRequestClose={() => setShowModal(false)}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                {/* <Text style={styles.modalHeaderText}>Congratulations</Text> */}
                <CrossWithBackground />
                <Text style={styles.modalHeaderText}>
                  You can select only two{'\n'}cards at a time
                </Text>
                <TouchableOpacity onPress={() => setShowModal(false)} style={styles.modalButtonContainer} activeOpacity={0.8}>
                  <View>
                    <Text style={styles.modalButtonText}>Continue</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardContainerBody: {
    backgroundColor: '#F9F2F2',
    marginVertical: 12,
    paddingBottom: 0,
    borderRadius: 10,
  },
  cardContainerBodyPadding: { paddingHorizontal: 12, paddingVertical: 9 },
  creditCardContainer: {
    // marginTop: 12,
    width: Responsive.width(300),
    height: Responsive.height(172),
    borderRadius: 12,
    elevation: 3,
    // marginVertical: SIZES.padding,
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  rewardsText: {
    color: '#626262', fontSize: 12, fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }), marginBottom: 8, width: 250
  },
  feeContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  creditCardImage: {
    // paddingLeft: Responsive.width(24),
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
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
    color: '#ffffff',
    width: 75,
  },
  bankLogo: {
    marginLeft: 90,
    marginTop: -40,
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
  feeText: {
    fontSize: 10,
    color: '#626262',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    }),
  },
  checkBoxContainer: { marginTop: 0, width: 24, height: 24, borderRadius: 4 },
  checkBoxIconStyle: { borderRadius: 4, borderWidth: 0 },
  modalContainer: {
    backgroundColor: '#ffffff',
    width: '75%',
    height: '40%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: '55%',
    marginHorizontal: '12%',
  },
  modalHeaderText: {
    fontSize: SIZES.h3,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
    color: '#7B7B7B',
    textAlign: 'center',
    paddingVertical: 20,
  },
  modalSubText: {
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Regular',
      android: 'Exo2Regular'
    }),
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: '#797E96',
    position: 'absolute',
  },
  modalButtonContainer: {
    backgroundColor: '#4D2D8F',
    height: '12%',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
});
