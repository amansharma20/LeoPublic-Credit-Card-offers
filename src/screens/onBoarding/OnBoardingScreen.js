/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardingCarousel from './OnBoardingCarousel';
import onBoardingData from '../../assets/dummyData/onBoardingData';
import { images } from '../../constants';
import { ScreenHeight } from 'react-native-elements/dist/helpers';


export default function OnBoardingScreen() {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <ImageBackground source={images.onBoardingBackground} style={{ width: '100%', height: ScreenHeight, backgroundColor: 'red' }}>
            <View style={styles.container}>
                <OnBoardingCarousel images={onBoardingData.images} titlesText={onBoardingData.titlesText} descriptions={onBoardingData.descriptions} />
            </View>

        </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
