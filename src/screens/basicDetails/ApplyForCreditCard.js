/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../constants/theme';
import CommonHeader from '../../components/headers/CommonHeaderWithBackButton';
import {Field, Formik} from 'formik';
import CustomInput from '../../components/CustomInput';
import {icons} from '../../constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Responsive} from '../../utils/layouts/Layout';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

export default function ApplyForCreditCard() {
  const navigation = useNavigation();
  const [checkboxState, setCheckboxState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const formatedDate = date => {
    var formattedDate = format(date, 'MMMM do, yyyy');
    return formattedDate;
  };
  return (
    <ScrollView style={styles.container}>
      <CommonHeader children={' Apply For Credit Card'} />
      <View style={styles.body}>
        <Text style={styles.headerText}>
          We just need a few details to help you get started
        </Text>
        <View style={styles.inputs}>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              pan: '',
              fathersName: '',
              mothersName: '',
              companyName: '',
              companyAddress: '',
              companyEmailId: '',
              designation: '',
              addressLine1: '',
              addressLine2: '',
              city: '',
              state: '',
              pinCode: '',
            }}
            onSubmit={values => values}>
            {({handleSubmit, errors, touched, values}) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row', marginVertical: 8}}>
                    <Field
                      component={CustomInput}
                      name="fullName"
                      style={styles.textInput}
                      placeholder="Full Name"
                      value={values.fullName}
                    />
                  </View>
                </View>

                <TouchableOpacity onPress={() => setShowModal(true)}>
                  <View style={styles.dobContainer}>
                    <Text style={styles.dobText}>{formatedDate(date)}</Text>
                  </View>
                </TouchableOpacity>

                {showModal && (
                  <Modal
                    animationType="fade"
                    transparent={true}
                    showModal={showModal}
                    backgroundColor="black"
                    onRequestClose={() => setShowModal(false)}>
                    <DatePicker
                      date={date}
                      onDateChange={setDate}
                      mode="date"
                      style={styles.datePicker}
                    />
                    <View style={styles.dateSubmitContainer}>
                      <TouchableOpacity
                        // onPress={() => setDate(new Date())}
                        onPress={() => setShowModal(false)}>
                        <Text style={styles.submitDateButtonText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                )}

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row', marginTop: 8}}>
                    <Field
                      component={CustomInput}
                      name="phone"
                      style={styles.textInput}
                      placeholder="Mobile Number"
                      keyboardType="numeric"
                      value={values.phone}
                      maxLength={10}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="email"
                      style={styles.textInput}
                      placeholder="Email ID"
                      value={values.email}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="pan"
                      style={styles.textInput}
                      placeholder="PAN ID"
                      value={values.pan}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="fathersName"
                      style={styles.textInput}
                      placeholder="Father's Name"
                      value={values.fathersName}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="mothersName"
                      style={styles.textInput}
                      placeholder="Mother's Name"
                      value={values.mothersName}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="companyName"
                      style={styles.textInput}
                      placeholder="Company Name"
                      value={values.companyName}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="companyAddress"
                      style={styles.textInput}
                      placeholder="Company Address"
                      value={values.companyAddress}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="companyEmailID"
                      style={styles.textInput}
                      placeholder="Company Email ID"
                      value={values.companyEmailId}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="designation"
                      style={styles.textInput}
                      placeholder="Designation"
                      value={values.designation}
                    />
                  </View>
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    color: '#1C1B1B',
                    fontFamily: Platform.select({
                      ios: 'Exo2-Medium',
                      android: 'Exo2Medium',
                    }),
                    marginVertical: 8,
                  }}>
                  Current Address
                </Text>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="addressLine1"
                      style={styles.textInput}
                      placeholder="Address Line 1"
                      value={values.addressLine1}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="addressLine2"
                      style={styles.textInput}
                      placeholder="Address Line 2"
                      value={values.addressLine2}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="city"
                      style={styles.textInput}
                      placeholder="City"
                      value={values.city}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="state"
                      style={styles.textInput}
                      placeholder="State"
                      value={values.state}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="pinCode"
                      style={styles.textInput}
                      placeholder="PIN Code"
                      value={values.pinCode}
                    />
                  </View>
                </View>

                <View style={styles.termsContainer}>
                  <View style={{width: '10%'}}>
                    <View>
                      <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState}
                        onPress={() => setCheckboxState(!checkboxState)}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState ? '#4D2D8F' : '#f1f1f1'}
                        unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
                      />
                    </View>
                  </View>
                  <Text style={styles.termsText}>
                    Same as Permanent Address
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    color: '#1C1B1B',
                    fontFamily: Platform.select({
                      ios: 'Exo2-Medium',
                      android: 'Exo2Medium',
                    }),
                    marginVertical: 8,
                  }}>
                  Permanent Address
                </Text>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="addressLine1"
                      style={styles.textInput}
                      placeholder="Address Line 1"
                      value={values.addressLine1}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="addressLine2"
                      style={styles.textInput}
                      placeholder="Address Line 2"
                      value={values.addressLine2}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="city"
                      style={styles.textInput}
                      placeholder="City"
                      value={values.city}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="state"
                      style={styles.textInput}
                      placeholder="State"
                      value={values.state}
                    />
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Field
                      component={CustomInput}
                      name="pinCode"
                      style={styles.textInput}
                      placeholder="PIN Code"
                      value={values.pinCode}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!checkboxState}>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.registerNowButtonText}>Apply Now</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  body: {
    padding: SIZES.padding,
    paddingTop: 33,
    backgroundColor: '#ffffff',
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  headerText: {
    fontSize: 16,
    color: '#797E96',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  inputs: {
    // height: '47%',
  },
  datePicker: {
    backgroundColor: '#ffffff',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 0,
    width: 360,
    height: 500,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  dobContainer: {
    backgroundColor: '#f4f5f7',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 8,
  },
  dateSubmitContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  dobText: {
    marginLeft: 10,
    color: '#B4B4B4',
    fontSize: SIZES.h3,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  termsContainer: {
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: 8,
  },
  termsText: {
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
    color: '#979797',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
    color: '#1C1B1B',
    paddingHorizontal: 16,
    fontSize: SIZES.h3,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
    marginVertical: 16,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d2d8f',
    borderRadius: 10,
    height: 48,
    marginVertical: 20,
  },
  submitDateButtonText: {
    fontSize: 16,
    color: '#4D2D8F',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  buttonText: {
    fontSize: SIZES.h3,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  registerNowButtonText: {
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#ffffff',
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 130,
  },
  footerText: {
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  checkMarkIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: -28,
    tintColor: '#3CC1C5',
    marginTop: Responsive.height(32),
  },
  inputContainer: {
    width: '100%',
  },
  checkBoxContainer: {marginTop: 0, width: 24, height: 24, borderRadius: 4},
  checkBoxIconStyle: {borderRadius: 4, borderWidth: 0},
});
