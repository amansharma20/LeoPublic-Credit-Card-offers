/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme/';
import icons from '../../constants/icons';
import RadioButtons from '../../components/RadioButtons';
import { Formik, Field } from 'formik';
import { COLORS } from '../../constants';
import CustomInput from '../../components/CustomInput';
import { Responsive } from '../../utils/layouts/Layout';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const screenHeight = Dimensions.get('window').height;

export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [checkboxState, setCheckboxState] = useState(false);

  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid phone number')
      // .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      // .matches(/\w*[a-z]\w*/,  'Password must have a small letter')
      // .matches(/\w*[A-Z]\w*/,  'Password must have a capital letter')
      // .matches(/\d/, 'Password must have a number')
      // .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });


  const onSubmit = data => {
    const signUpData = {
      FirstName: data.fullName,
      Email: data.email,
      MobileNumber: data.phoneNumber,
    };
    console.log(signUpData);
    console.log('signUpData');
    dispatch(
      AuthActions.signUp('/Account/RegisterCustomerStart', signUpData),
    ).then(response => {
      console.log(response);
      navigation.navigate('OTPScreen', {
        phone: data.phoneNumber,
        screenName: 'Signup',
      });
    });
  };

  const onCardClick = () => {
    setCheckboxState(!checkboxState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity>
          <View style={styles.header}>
            <Image source={icons.backButton} style={styles.backButtonSize} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Register with us</Text>
          <Text style={styles.subTitleText}>
            We’ll send you a code to verify your contact number
          </Text>
        </View>

        <View style={styles.inputs}>

          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => onSubmit(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Field
                      component={CustomInput}
                      name="fullName"
                      style={styles.textInput}
                      placeholder="Full Name"
                    />
                    {!errors.fullName && touched.fullName && (
                      <Image source={icons.tick} style={styles.checkMarkIcon} />
                    )}
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Field
                      component={CustomInput}
                      name="email"
                      style={styles.textInput}
                      placeholder="Email ID"
                    />
                    {!errors.email && touched.email && (
                      <Image source={icons.tick} style={styles.checkMarkIcon} />
                    )}
                  </View>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Field
                      component={CustomInput}
                      name="phoneNumber"
                      style={styles.textInput}
                      placeholder="Phone Number"
                      keyboardType="numeric"
                    />
                    {!errors.phoneNumber && touched.phoneNumber && (
                      <Image source={icons.tick} style={styles.checkMarkIcon} />
                    )}
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.termsContainer}>
          <View style={{ width: '10%' }}>
          <View>
              <BouncyCheckbox
                style={styles.checkBoxContainer}
                isChecked={checkboxState}
                disableBuiltInState
                onPress={onCardClick}
                // onPress={() => setCheckboxState(!checkboxState)}
                size={20}
                iconStyle={styles.checkBoxIconStyle}
                fillColor={checkboxState ? '#4D2D8F' : '#f1f1f1'}
                unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
              />
            </View>
          </View>
          <Text style={styles.termsText}>
            By creating an account, you agree to our{'\n'}Terms and Conditions
          </Text>
        </View>
        <TouchableOpacity onPress={()=> console.log(onSubmit)}>
        <View style={styles.buttonContainer}>
          {/* <Button title='ggg'  onPress={()=> handleSubmit(onSubmit)}
            /> */}
          <Text
            style={{ fontSize: 16, fontFamily: 'Exo2Bold', color: '#ffffff' }}>
            Register Now
          </Text>
        </View>
        </TouchableOpacity>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#4d2d8f', fontFamily: 'Exo2Bold' }}>
              {' '}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  body: {
    padding: SIZES.padding,
  },
  header: {
  },
  backButtonSize: { width: 24, height: 24 },
  headerTextContainer: {
    paddingVertical: 20,
  },
  headerText: {
    fontSize: SIZES.h1,
    fontFamily: 'Exo2Bold',
  },
  subTitleText: {
    fontSize: SIZES.h3,
    marginTop: 12,
    fontFamily: 'Exo2Medium',
    color: '#797E96',
  },
  inputs: {
    height: '47%',
  },
  termsContainer: {
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  termsText: {
    fontSize: SIZES.h4,
    fontFamily: 'Exo2Medium',
    color: '#979797',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
    color: '#1C1B1B',
    paddingHorizontal: 16,
    fontSize: SIZES.h3,
    fontFamily: 'Exo2Medium',
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
  buttonText: {
    fontSize: SIZES.h3,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: SIZES.h4,
    fontFamily: 'Exo2Medium',
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
