/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { Responsive } from '../../utils/layouts/Layout';
import { SIZES } from '../../constants/theme';
import BackButtonBlack from '../../assets/svgs/backButtonBlack.svg';
import CommonLoading from '../../components/CommonLoading';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const schema = yup.object().shape({
    phone: yup.string().required('Phone is' + ' ' + 'required.'),
  });

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    CommonLoading.show()
    const signInData = {
      MobileNumber: data.phone,
    };
    dispatch(AuthActions.signIn('/Account/LoginStart', signInData)).then(
      response => {
        CommonLoading.hide()
        navigation.navigate('OTPScreen', {
          phone: data.phone,
          screenName: 'Login',
        });
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.backButton}>
          <BackButtonBlack />
        </View>
        <View style={styles.bodyItems}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign in to Leo</Text>
            <Text style={styles.subTitleText}>
              We'll send you a code to verify your contact number
            </Text>
          </View>

          <View style={styles.textInputContainer}>
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
              name="phone"
              defaultValue="8860777703"
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.nextButtonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerTextOne}>
              Don’t have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.footerTextTwo}>
                Sign up
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: Platform.select({
      ios: Responsive.height(0),
      android: Responsive.height(0),
    }),
    height: screenHeight,
  },
  headerContainer: {
    // marginTop: '20%',
  },
  body: { padding: SIZES.padding },
  bodyItems: { justifyContent: 'space-around', height: '100%' },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  textInputContainer: {
    marginTop: '20%',
  },
  subTitleText: {
    fontSize: 16,
    color: '#797E96',
  },
  phoneInput: {
    marginTop: '10%',
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
    color: '#1C1B1B',
    paddingHorizontal: 15,
    fontSize: SIZES.h3,
    height: Responsive.height(50),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d2d8f',
    borderRadius: 10,
    height: 48,
    marginVertical: 20,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  footerContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
  footerTextOne: { fontSize: SIZES.h4, color: '#7a869a' },
  footerTextTwo: { fontSize: SIZES.h4, fontWeight: '700', color: '#4d2d8f', marginLeft: 2.5 },
});
