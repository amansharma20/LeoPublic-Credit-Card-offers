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

export default function OTPScreen(props) {
    const { phone } = props.route.params
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        otp: yup.string().required('Phone is' + ' ' + 'required.'),
    });

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        const otpData = {
            'MobileNumber': phone,
            "Code": data.otp
        }
        dispatch(AuthActions.signIn('/Account/LoginComplete', otpData)).then((response) => {
            console.log(response.data)
        })
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.phoneInput}
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="OTP"
                        placeholderTextColor="#797979"
                        keyboardType='phone-pad'
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                        secureTextEntry={false}
                        underlineColorAndroid="#f000"
                        returnKeyType="next"
                    />
                )}
                name="otp"
                defaultValue="0000"
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