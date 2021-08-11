import { applicationProperties } from '../../../application.properties';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const AuthService = {
    signIn,
};

async function signIn(url, data) {
    try {
        let loginResponse = await axios.post(applicationProperties.baseUrl + url, data);
        return loginResponse;
    } catch (e) {
        Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Oops',
            text2: 'Invalid credentials',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
        return {
            success: false,
            data: e,
        };
    }
}

