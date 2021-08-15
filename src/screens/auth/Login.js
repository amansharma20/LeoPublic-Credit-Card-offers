/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../persistence/actions/AuthActions';
import {useNavigation} from '@react-navigation/native';
import {Responsive} from '../../utils/layouts/Layout';
import {SIZES, COLORS} from '../../constants/theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const schema = yup.object().shape({
    phone: yup.string().required('Phone is' + ' ' + 'required.'),
  });

  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    const signInData = {
      MobileNumber: data.phone,
    };
    dispatch(AuthActions.signIn('/Account/LoginStart', signInData)).then(
      response => {
        navigation.navigate('OTPScreen', {
          phone: data.phone,
          screenName: 'Login',
        });
      },
    );
  };

  return (
    <SafeAreaView
      style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          {/* <Image source={require("./assets/2.png")}/> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign in to Leo</Text>
        <Text style={styles.subTitleStyle}>
          We'll send you a code to verify your contact number
        </Text>
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.inputView}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
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
                  style={{color: '#1C1B1B'}}
                />
              )}
              name="phone"
              defaultValue="Phone Number"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View
            style={[
              styles.inputView,
              {
                alignItems: 'center',
                backgroundColor: COLORS.ButtonDisabled,
                marginTop: 15,
              },
            ]}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              NEXT
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 8,
              width: '55%',
              margin: screenHeight / 4,
            }}>
            <Text style={{color: COLORS.subheadingGrey}}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: 6,
                  color: COLORS.headingBlack,
                }}>
                SignUp
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
      ios: Responsive.height(40),
      android: Responsive.height(0),
    }),
    height: screenHeight,
  },
  body: {padding: SIZES.padding2},
  inputView: {
    width: '90%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    height: 46,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
    marginTop: screenHeight / 6,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: SIZES.padding2 / 2,
    color: COLORS.headingBlack,
    backgroundColor: 'white',
    marginTop: screenHeight / 7,
  },
  subTitleStyle: {
    fontSize: 16,
    fontWeight: 'normal',
    padding: SIZES.padding2 / 4,
    color: COLORS.subheadingGrey,
    backgroundColor: 'white',
    marginTop: 5,
  },
});
