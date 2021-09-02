/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme/';
import LottieView from 'lottie-react-native';
import TempOnBoardingAnimation from '../../components/animations/TempOnBoardingAnimation';
import { images } from '../../constants';

export default function TempOnBoarding() {
    const navigation = useNavigation();
    setTimeout(function () {
        navigation.navigate('BottomTabBarNavigator');
      }, 5000);
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true}
                backgroundColor={'#F7D071'}
                barStyle={'dark-content'}
            />
            <View style={styles.body}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <Image source={images.leoLogo} style={{ width: 160, height: 176 }} />
                    <Text style={{ fontFamily: 'Exo2Bold', fontSize: 48, color: '#4D2D8F' }}>Leo</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TempOnBoardingAnimation />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7D071',
    },
    body: {
        padding: SIZES.padding,
        marginTop: 80
    },
});
