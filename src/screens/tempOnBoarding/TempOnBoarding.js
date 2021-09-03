/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme/';
import LottieView from 'lottie-react-native';
import TempOnBoardingAnimation from '../../components/animations/TempOnBoardingAnimation';
import { images } from '../../constants';
import { useSelector } from 'react-redux';
import { SessionService } from '../../persistence/services/SessionService';

export default function TempOnBoarding() {
    const navigation = useNavigation();


      const session = useSelector(state => state.SessionReducer.data);

  useEffect(() => {
    getData();
  }, []);

  async function getData(){
    const result =  await SessionService.getSession();
    console.log('result');
    console.log(result);
    console.log('result');
  }
  setTimeout(function () {
    {session.loggedIn === true ? (navigation.navigate('BottomTabBarNavigator'))
     :
     (navigation.navigate('StartScreen')); }

  }, 5000);

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                backgroundColor={'#ffffff'}
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
        marginTop: 80,
    },
});
