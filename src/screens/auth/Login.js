/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Keyboard, TextInput, Button} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../persistence/actions/AuthActions';
import {useNavigation} from '@react-navigation/native';

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
    dispatch(AuthActions.signIn('/Account/LoginStart', signInData));
    navigation.navigate('OTPScreen', {
      phone: data.phone,
      screenName: 'Login',
    });
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.phoneInput}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Phone"
            placeholderTextColor="#797979"
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

      <Button onPress={handleSubmit(onSubmit)} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneInput: {
    marginTop: 100,
    borderColor: 'red',
    borderRadius: 10,
  },
});
