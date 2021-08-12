/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../persistence/actions/AuthActions';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import icons from '../../constants/icons';
import { Responsive } from '../../utils/layouts/Layout';

export default function OTPScreen(props) {
  console.log(props);
  const navigation = useNavigation();
  // const {phone} = props.route.params;
  // const {namscreenName} = props.route.params;

  const dispatch = useDispatch();
  const schema = yup.object().shape({
    otp: yup.string().required('Phone is' + ' ' + 'required.'),
  });

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    navigation.navigate('BasicDetailsInput');
    if (namscreenName == 'Login') {
      const otpData = {
        MobileNumber: phone,
        Code: data.otp,
      };
      dispatch(AuthActions.signIn('/Account/LoginComplete', otpData)).then(
        response => {
          console.log(response.data);
          navigation.navigate('OTPScreen', {
            token: response.data,
          });
        },
      );
    } else {
      console.log('YHA TK PAUCH GAYA');
      const otpData = {
        MobileNumber: phone,
        Code: data.otp,
      };
      dispatch(
        AuthActions.signIn('/Account/RegisterCustomerComplete', otpData),
      ).then(response => {
        console.log(response.data);
        navigation.navigate('OTPScreen', {
          token: response.data,
        });
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <TouchableOpacity>
          <View style={styles.header}>
            <Image source={icons.backButton} style={styles.iconSize} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Register with us</Text>
          <Text style={styles.subTitleText}>
            We’ll send you a code to verify your contact number
          </Text>
        </View>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={styles.otpContainer}>
              <OTPInputView
                pinCount={4}
                style={styles.otpInputContainer}
                codeInputFieldStyle={styles.underlineStyleBase}
              />
            </View>
          )}
          name="otp"
          defaultValue="0000"
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>I didn't receive the code.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerTextBold}> Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.select({
      ios: Responsive.height(40),
      android: Responsive.height(0),
    }),
  },
  body: {
    padding: SIZES.padding,
  },
  iconSize: {width: 24, height: 24},
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
  resendButton: {
    fontSize: 16,
    fontFamily: 'AvenirLTStd-Black',
    color: '#3511a3',
  },
  resendButtonContainer: {width: '80%', alignItems: 'flex-end'},
  phoneInput: {
    marginTop: 100,
    borderColor: 'red',
    borderRadius: 10,
  },
  otpContainer: {alignItems: 'center', marginTop: '20%'},
  otpInputContainer: {width: '80%', height: 100},
  underlineStyleBase: {
    borderRadius: 8,
    backgroundColor: '#f4f5f7',
    color: '#000',
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: SIZES.h4,
    color: '#7a869a',
    fontWeight: '700',
  },
  footerTextBold: {color: '#4d2d8f', fontWeight: 'bold'},
});
