/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Responsive } from '../../utils/layouts/Layout';
import BackButtonBlack from '../../assets/svgs/backButtonBlack.svg';
import CommonLoading from '../../components/CommonLoading';
import { AuthContext } from '../../navigation/ApplicationNavigator';
import MyAsyncStorage from '../../persistence/storage/MyAsyncStorage';


export default function OTPScreen(props) {

  const { signIn, singUp } = useContext(AuthContext);


  const navigation = useNavigation();
  const { phone } = props.route.params;
  const { screenName } = props.route.params;
  const { firstName } = props.route.params;

  const [otp, setOtp] = useState('0000');

  const dispatch = useDispatch();
  const session = useSelector(state => state.SessionReducer.data);

  const onSubmit = () => {
    CommonLoading.show();
    if (screenName == 'Login') {
      const otpData = {
        MobileNumber: phone,
        Code: otp,
      };
      dispatch(AuthActions.signIn('Account/LoginComplete', otpData)).then(
        (response) => {
          setUserStatus(false);
          CommonLoading.hide();
          if (response && response.success === false) {
            //Do Nothing.
          } else {
            signIn(response.data)
          }
        },
      );
    } else {
      const otpData = {
        MobileNumber: phone,
        Code: otp,
      };
      setUserStatus(true);
      dispatch(
        AuthActions.signup('Account/RegisterCustomerComplete', otpData),
      ).then((response) => {
        CommonLoading.hide();
        if (response && response.success === false) { } else {
          singUp(response.data)

        }
      });
    }
  };

  const setUserStatus = async (flag) => {
    await MyAsyncStorage.storeData('newUserStatus', {
      newUser: flag,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <BackButtonBlack />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>OTP Authentication</Text>
          <Text style={styles.subTitleText}>
            An authentication code has been sent to {'\n'}
            (+91) {phone}
          </Text>
        </View>
        <View style={styles.otpContainer}>
          <OTPInputView
            pinCount={4}
            autoFocusOnLoad
            style={styles.otpInputContainer}
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={(code => {
              setOtp(code);
              console.log(`Code is ${code}, you are good to go!`);
            })}
          />
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>I didn't receive the code.</Text>
          <TouchableOpacity onPress={() => {
            CommonLoading.show();
            const signInData = {
              MobileNumber: phone,
            };
            dispatch(AuthActions.signIn('Account/LoginStart', signInData)).then(() => {
              CommonLoading.hide();
            });
          }}>
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
      ios: Responsive.height(0),
      android: Responsive.height(0),
    }),
  },
  body: {
    padding: SIZES.padding,
  },
  header: {
    marginTop: Platform.select({
      ios: 40,
      android: 0,
    }),
  },
  iconSize: {
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
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
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
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  resendButton: {
    fontSize: 16,
    color: '#3511a3',
  },
  resendButtonContainer: {
    width: '80%',
    alignItems: 'flex-end',
  },
  phoneInput: {
    marginTop: 100,
    borderColor: 'red',
    borderRadius: 10,
  },
  otpContainer: {
    alignItems: 'center',
    marginTop: '20%',
  },
  otpInputContainer: {
    width: '80%',
    height: 100,
  },
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
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
    color: '#7a869a',
  },
  footerTextBold: {
    color: '#4d2d8f',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
