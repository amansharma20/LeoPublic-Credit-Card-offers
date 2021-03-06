/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Image,
} from 'react-native';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { Responsive } from '../../utils/layouts/Layout';
import { SIZES } from '../../constants/theme';
import BackButtonBlack from '../../assets/svgs/backButtonBlack.svg';
import CommonLoading from '../../components/CommonLoading';
import { Formik } from 'formik';
import { icons } from '../../constants';

const screenHeight = Dimensions.get('window').height;


export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required('This field is' + ' ' + 'required.')
      .matches(/(\d){10}\b/ , 'Enter a valid phone number'),
  });

  const login = data => {
    CommonLoading.show();
    const signInData = {
      MobileNumber: data.phone,
    };
    dispatch(AuthActions.signIn('Account/LoginStart', signInData)).then(
      (response) => {
        CommonLoading.hide();
        if (response && response.success === false) { } else {
          navigation.navigate('OTPScreen', {
            phone: data.phone,
            screenName: 'Login',
          });
        }

      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <View style={styles.backButton}>
            <BackButtonBlack />
          </View>
        </TouchableOpacity>
        <View style={styles.bodyItems}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign in to Leo</Text>
            <Text style={styles.subTitleText}>
              We'll send you a code to verify your contact number
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <Formik
              validationSchema={schema}
              initialValues={{
                phone: '',
              }}
              onSubmit={values => login(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.checkMarkContainer}>
                    <TextInput
                      name="phone"
                      style={styles.phoneInput}
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                      keyboardType="numeric"
                      placeholder="Phone Number"
                      placeholderTextColor="#B4B4B4"
                      maxLength={10}
                    />
                    {!errors.phone && touched.phone && (
                      <Image source={icons.tick} style={styles.checkMarkIcon} />
                    )}
                  </View>
                  {errors.phone && touched.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )}
                  <TouchableOpacity
                    onPress={handleSubmit}
                  // onPress={handleSubmit}
                  >
                    <View style={styles.buttonContainer}>
                      <Text style={styles.nextButtonText}>Next</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerTextOne}>Don???t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.footerTextTwo}>Sign up</Text>
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
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  textInputContainer: {
    marginTop: '15%',
  },
  subTitleText: {
    fontSize: 16,
    color: '#797E96',
    marginTop:10,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  phoneInput: {
    marginTop: '10%',
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
    color: '#1C1B1B',
    paddingHorizontal: 15,
    fontSize: 16,
    height: Responsive.height(50),
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
    width: '100%',
  },
  checkMarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d2d8f',
    borderRadius: 10,
    height: 48,
    marginTop:20
    

  },
  nextButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerTextOne: {
    fontSize: SIZES.h4,
    color: '#7a869a',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  footerTextTwo: {
    fontSize: SIZES.h4,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#4d2d8f',
    marginLeft: 2.5,
  },
  error: {
    padding: 4,
    color: '#cc0000',
  },
  checkMarkIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: -28,
    tintColor: '#3CC1C5',
    marginTop: Responsive.height(36),
  },
});
