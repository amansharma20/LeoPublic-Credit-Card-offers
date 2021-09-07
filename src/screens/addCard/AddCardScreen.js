/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ImageBackground,
  Platform,
  ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES, icons, images } from '../../constants';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import CongratulationsAnimation from '../../components/animations/CongratulationsAnimation';
import MasterCardLogo from '../../assets/svgs/mastercardLogo.svg';
import BankLogo from '../../assets/svgs/bankLogo.svg';
import Code from '../../assets/svgs/code.svg';
import { Responsive } from '../../utils/layouts/Layout';
import { GQLQuery } from '../../persistence/query/Query';
import { useMutation, useQuery } from '@apollo/client';
import { GQLMutation } from '../../persistence/mutation/Mutation';
import CommonLoading from '../../components/CommonLoading';
import Toast from 'react-native-toast-message';


export default function AddCardScreen() {

  const navigation = useNavigation();

  const [openBankList, setOpenBankList] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const [openCardType, setOpenCardType] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cardValue, setCardValue] = useState(null);

  const [bankName, setBankName] = useState();

  const [userCardNumber, setUserCardNumber] = useState(1);
  const [selectedBankId, setSelectedBankId] = useState(1);
  const [selectedCardId, setSelectedCardId] = useState(1);


  const [cardType, setCardType] = useState();

  const schema = yup.object().shape({
    cardNumber: yup.number().required('Card Number' + ' ' + 'is required'),
  });

  const [addCard, { data: userCardData, error: cardAddError}] = useMutation(GQLMutation.ADD_USER_CREDIT_CARD);

  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    CommonLoading.show();
   addCard({ variables: { BankId: parseFloat(selectedCardId), BankCardId: parseFloat(selectedCardId), CardNumber:  parseFloat(data.cardNumber)} });
   setShowModal(true);
   CommonLoading.hide();
   if (userCardData && userCardData.AddCustomerUserBankCardMutation && userCardData.AddCustomerUserBankCardMutation.AddCustomerUserBankCard == 'Created'){
    setShowModal(true);
    CommonLoading.hide();
   }
   if (cardAddError){
    CommonLoading.hide();
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Failed',
      text2: 'Please Try Again.',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
   }
  };





  var bankArray = [];
  var bankCardsArray = [];

  const { loading, data: data1, error } = useQuery(GQLQuery.GET_BANKS);
  const Bank = data1 && data1.BankQuery && data1.BankQuery.GetBanks;


  const { data: data2 } = useQuery(GQLQuery.GET_CARD_BY_BANK_ID, {
    variables: {
      BankId: selectedBankId,
    },
  });

  const BankCards = data2 && data2.BankCardQuery && data2.BankCardQuery.GetBankCardById;

  useEffect(() => {
    retriveBanks();
  }, [Bank, BankCards]);


  function getCardByBankId() {
    BankCards && BankCards.map((item) => {
      const tempName = {
        label: item.CardName,
        value: item.Id,
      };
      bankCardsArray.push(tempName);
    });
    setCardType(bankCardsArray);
  }

  function retriveBanks() {
    Bank && Bank.map((item) => {
      const tempName = {
        label: item.Name,
        value: item.Id,
      };
      bankArray.push(tempName);
    });
    setBankName(bankArray);
  }


  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.header}>
            <Image source={icons.backButton} style={styles.backButtonSize} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Add New Card</Text>
        </View>
        <View style={styles.creditCardImage}>
          <ImageBackground
            style={styles.creditCardContainer}
            //   source={images.creditCardBackground}
            source={images.creditCardBlueBg}
            imageStyle={styles.backgroundImageStyle}>
            <View style={styles.creditCardDetailsContainer}>
              <View style={styles.cardTopContainer}>
                <Text style={styles.cardTypeText}>Card Scheme</Text>
                <BankLogo style={styles.bankLogo} />
              </View>
              <Code />
              <View style={styles.cardBottomContainer}>
                <Text style={styles.cardNumberText}>**** **** **** ****</Text>
                <MasterCardLogo />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{marginTop:60}}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label={'cardNumber'}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={styles.digitsInput}
                placeholderTextColor={'#B4B4B4'}
                placeholder={'First 6 digits of your Credit Card'}
                keyboardType={'number-pad'}
                maxLength={6}
              />
            )}
            name="cardNumber"
            defaultValue={''}
          />
          <DropDownPicker
            open={openBankList}
            value={selectedBank}
            items={bankName}
            setOpen={setOpenBankList}
            setValue={setSelectedBank}
            onChangeValue={(value) => {
              setSelectedBankId(value);
              getCardByBankId();
            }}
            setItems={setBankName}
            zIndex={10000}
            zIndexInverse={1000}
            placeholder="Bank Name"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
          <DropDownPicker
            open={openCardType}
            value={cardValue}
            items={cardType}
            setOpen={setOpenCardType}
            setValue={setCardValue}
            setItems={setCardType}
            onChangeValue={(value) => {
              console.log(value);
            }}
            zIndex={6000}
            zIndexInverse={1000}
            placeholder="Card Type"
            style={styles.cardTypePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            // onPress={()=>{
            //   submitCardDetails()
            // }}

            onPress={handleSubmit(onSubmit)}

          // onPress={() => setShowModal(true)}
          >
            <View style={styles.yesButtonContainer}>
              <Text style={styles.yesButtonText}>Add Card</Text>
            </View>
          </TouchableOpacity>
        </View>
        {showModal && (
          <Modal
            animationType="fade"
            transparent={true}
            showModal={showModal}
            onRequestClose={() => setShowModal(false)}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <CongratulationsAnimation />
                {/* <Text style={styles.modalHeaderText}>Congratulations</Text> */}
                <Text style={styles.modalSubText}>
                  Your Credit Card has been added successfully. Best Offers are
                  waiting for you.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('BottomTabBarNavigator')} style={styles.modalButtonContainer} activeOpacity={0.8}>
                  <View>
                    <Text style={styles.modalButtonText}>Continue</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    paddingTop: Platform.select({
      ios: 30,
      android: 0,
    }),
  },
  body: {
    padding: SIZES.padding,
    height: '100%',
  },
  backButtonSize: {
    width: 24,
    height: 24,
  },
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
    marginTop: 20,
  },
  yesButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d2d8f',
    borderRadius: 10,
    height: 48,
    marginVertical: 15,
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
    fontWeight: '700',
  },
  noButtonText: {
    fontSize: SIZES.h3,
    color: '#4d2d8f',
    fontWeight: '700',
  },
  digitsInput: {
    backgroundColor: '#f4f5f7',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 12,
    fontSize: SIZES.h3,
    color: '#2A2525',
    height: 50,
  },
  bankNamePickerContainer: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
    marginTop: 10,
  },
  cardTypePickerContainer: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
    marginTop: 10,
  },
  placeholderText: {
    fontSize: SIZES.h3,
    color: '#B4B4B4',
  },
  dropDownContainerStyle: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
  },
  creditCardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: SIZES.padding2,
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    width: '75%',
    height: '45%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: '55%',
    marginHorizontal: '12%',
  },
  modalHeaderText: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  modalSubText: {
    fontSize: SIZES.h4,
    fontWeight: '400',
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
    fontWeight: '700',
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },

  creditCardContainer: {
    width: Responsive.width(290),
    height: Responsive.height(189),
    borderRadius: 12,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignContent: 'center',
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
    fontWeight: '700',
    color: '#ffffff',
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
    fontWeight: '700',
  },
});
