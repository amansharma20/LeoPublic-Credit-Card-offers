import React from 'react';
import {
    View,
    StyleSheet,
    Keyboard,
    TextInput,
    Button
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const schema = yup.object().shape({
        fname: yup.string().required('First Name is' + ' ' + 'required.'),
        lname: yup.string().required('Last Name is' + ' ' + 'required.'),
        email: yup.string().required('Email is' + ' ' + 'required.'),
        mobile: yup.string().required('Mobile is' + ' ' + 'required.'),
    });

    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        const signUpData = {
            'FirstName': data.fname,
            'LastName': data.lname,
            'Email': data.email,
            'MobileNumber': data.mobile,
        }
        dispatch(AuthActions.signUp('/Account/RegisterCustomerStart', signUpData)).then(response=>{
            console.log(response)
        })

        navigation.navigate('OTPScreen', {
            phone: data.mobile,
            screenName:'Signup'
        })
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.phoneInput}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="First Name"
                        placeholderTextColor="#797979"
                        keyboardType='phone-pad'
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
                        placeholder="Last Name"
                        placeholderTextColor="#797979"
                        keyboardType='phone-pad'
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={false}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                )}
                name="lname"
                defaultValue="Singh"
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.phoneInput}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="Email"
                        placeholderTextColor="#797979"
                        keyboardType='phone-pad'
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
                        placeholder="Mobile Number"
                        placeholderTextColor="#797979"
                        keyboardType='phone-pad'
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={false}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                )}
                name="mobile"
                defaultValue="8860777703"
            />
            <Button onPress={handleSubmit(onSubmit)} title='Submit' />

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
        borderRadius: 10
    }
});
