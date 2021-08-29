/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme/';
import icons from '../../constants/icons';
import { Formik, Field } from 'formik';
import CustomInput from '../../components/CustomInput';
import { Responsive } from '../../utils/layouts/Layout';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CommonLoading from '../../components/CommonLoading';


export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [checkboxState, setCheckboxState] = useState(false);

  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
      phone: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
  });


  const signup = data => {
 CommonLoading.show();
    const signUpData = {
      FirstName: data.fullName,
      Email: data.email,
      MobileNumber: data.phone,
    };
    dispatch(
      AuthActions.signUp('/Account/RegisterCustomerStart', signUpData),
    ).then((response) => {
      console.log(response)
      if(response.success){
        CommonLoading.hide();
        navigation.navigate('OTPScreen', {
          phone: data.phoneNumber,
          screenName: 'Signup',
        });
      }
    });
  };

  const onCardClick = () => {
    setCheckboxState(!checkboxState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.backButton} style={styles.backButtonSize} />
          </TouchableOpacity>

        </View>
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
              phone: '',
            }}
            onSubmit={values => signup(values)}>
            {({
              handleSubmit,
              errors,
              touched,
              values
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Field
                      component={CustomInput}
                      name="fullName"
                      style={styles.textInput}
                      placeholder="Full Name"
                      value={() => values.fullName}
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
                      value={() => values.email}
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
                      name="phone"
                      style={styles.textInput}
                      placeholder="Phone Number"
                      keyboardType="numeric"
                      value={() => values.phone}
                    />
                    {!errors.phone && touched.phone && (
                      <Image source={icons.tick} style={styles.checkMarkIcon} />
                    )}
                  </View>
                </View>
                <View style={styles.termsContainer}>
                  <View style={{ width: '10%', marginTop: 10 }}>
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
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.buttonContainer}>
                    {/* <Button title='ggg'  onPress={()=> handleSubmit(onSubmit)}
            /> */}
                    <Text
                      style={{
                        fontSize: 16, fontFamily: Platform.select({
                          ios: 'Exo2-Bold',
                          android: 'Exo2Bold'
                        }), color: '#ffffff'
                      }}>
                      Register Now
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>


        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{
              color: '#4d2d8f',
              fontFamily: Platform.select({
                ios: 'Exo2-Bold',
                android: 'Exo2Bold'
              }),
            }}>
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
    marginTop: Platform.select({
      ios: Responsive.height(0),
      android: Responsive.height(0),
    }),
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
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
  subTitleText: {
    fontSize: SIZES.h3,
    marginTop: 12,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    }),
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
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
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
      android: 'Exo2Medium'
    }),
    marginVertical: 16,
    width: '100%',
    height: 50
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
    marginTop: 130
  },
  footerText: {
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium'
    })
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
  checkBoxContainer: { marginTop: 0, width: 24, height: 24, borderRadius: 4 },
  checkBoxIconStyle: { borderRadius: 4, borderWidth: 0 },

});
