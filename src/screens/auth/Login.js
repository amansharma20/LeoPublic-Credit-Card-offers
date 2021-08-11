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

export default function Login() {
    const schema = yup.object().shape({
        phone: yup.string().required('Phone is' + ' ' + 'required.'),
    });

    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(data)
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
                        placeholder="Phone"
                        placeholderTextColor="#797979"
                        keyboardType='phone-pad'
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
