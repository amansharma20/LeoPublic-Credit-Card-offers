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
  TouchableHighlight,
  Button,
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

const screenHeight = Dimensions.get('window').height;

export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const schema = yup.object().shape({
    fname: yup.string().required('First Name is' + ' ' + 'required.'),
    lname: yup.string().required('Last Name is' + ' ' + 'required.'),
    email: yup.string().required('Email is' + ' ' + 'required.'),
    mobile: yup.string().required('Mobile is' + ' ' + 'required.'),
  });

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const signUpData = {
      FirstName: data.fname,
      LastName: data.lname,
      Email: data.email,
      MobileNumber: data.mobile,
    };
    dispatch(
      AuthActions.signUp('/Account/RegisterCustomerStart', signUpData),
    ).then(response => {
      console.log(response);
      navigation.navigate('OTPScreen', {
        phone: data.mobile,
        screenName: 'Signup',
      });
    });
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
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.phoneInput}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Full Name"
                placeholderTextColor="#B4B4B4"
                // keyboardType="phone-pad"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            )}
            name="fname"
            defaultValue="Shanu"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.phoneInput}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Email"
                placeholderTextColor="#B4B4B4"
                // keyboardType="phone-pad"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            )}
            name="email"
            defaultValue="shanu@webority.com"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.phoneInput}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Phone Number"
                placeholderTextColor="#B4B4B4"
                keyboardType="phone-pad"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            )}
            name="email"
            defaultValue="shanu@webority.com"
          />
        </View>
        <View style={styles.termsContainer}>
          <View style={{ width: '10%' }}>
            <RadioButtons />
          </View>
          <Text style={styles.termsText}>
            By creating an account, you agree to our{'\n'}Terms and Conditions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* <Button title='ggg'  onPress={()=> handleSubmit(onSubmit)}
            /> */}
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#4d2d8f', fontWeight: 'bold' }}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: screenHeight,
  },
  body: {
    padding: SIZES.padding,
  },
  header: {
    //   backgroundColor: '#000'
  },
  backButtonSize: { width: 24, height: 24 },
  headerTextContainer: {
    // backgroundColor: 'red',
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
  inputs: {
    height: '40%',
  },
  termsContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  termsText: {
    fontSize: SIZES.h4,
    color: '#979797',
  },
  phoneInput: {
    marginTop: '10%',
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
    color: '#1C1B1B',
    paddingHorizontal: 15,
    fontSize: SIZES.h3,
    height: '19.5%',
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
  },
});
