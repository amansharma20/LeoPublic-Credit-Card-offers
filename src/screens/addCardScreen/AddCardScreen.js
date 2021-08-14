/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES, icons, images} from '../../constants';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import CongratulationsAnimation from '../../components/animations/CongratulationsAnimation';
import CongratulationsAnimation2 from '../../components/animations/CongratulationsAnimation2';

export default function AddCardScreen() {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const [openBankName, setOpenBankName] = useState(false);
  const [openCardType, setOpenCardType] = useState(false);
  const [bankValue, setBankValue] = useState(null);
  const [cardValue, setCardValue] = useState(null);
  const [bankName, setBankName] = useState([
    {label: 'My Bank', value: 'my bank'},
    {label: 'Your Bank', value: 'your bank'},
  ]);
  const [cardType, setCardType] = useState([
    {label: 'Debit', value: 'debit'},
    {label: 'Credit', value: 'credit'},
  ]);

  const schema = yup.object().shape({
    pincode: yup.number().required('Pincode' + ' ' + 'is required'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity>
          <View style={styles.header}>
            <Image source={icons.backButton} style={styles.backButtonSize} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Add New Card</Text>
        </View>
        <View style={styles.creditCardImage}>
          <Image source={images.creditCardImage} />
        </View>

        <View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label={'Pincode'}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={errors.pincode}
                style={styles.digitsInput}
                placeholderTextColor={'#B4B4B4'}
                placeholder={'First 6 digits of your Credit Card'}
                keyboardType={'number-pad'}
                maxLength={6}
              />
            )}
            name="pincode"
            defaultValue={''}
          />
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
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
            // onPress={handleSubmit(onSubmit)}
            onPress={() => setShowModal(true)}>
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
                <View style={styles.modalButtonContainer}>
                  <Text style={styles.modalButtonText}>Continue</Text>
                </View>
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
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    padding: SIZES.padding,
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
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: SIZES.h3,
    marginTop: 12,
    color: '#797E96',
  },
  buttonsContainer: {
    marginTop: '50%',
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
});
