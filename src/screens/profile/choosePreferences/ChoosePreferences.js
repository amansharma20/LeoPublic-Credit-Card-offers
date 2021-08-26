/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../../constants/theme';
import PremiumNature from '../../../assets/svgs/premiumNature.svg';
import ValueForMoney from '../../../assets/svgs/valueForMoney.svg';
import LowerFees from '../../../assets/svgs/lowerFees.svg';
import PopularityofCardIssuer from '../../../assets/svgs/popularityofCardIssuer.svg';
import BestOffers from '../../../assets/svgs/bestOffers.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Responsive } from '../../../utils/layouts/Layout';
import CommonHeader from '../../../components/headers/CommonHeaderWithBackButton';


export default function ChoosePreferences() {
const [borderColor, setBorderColor] = useState('#ffffff');
const [borderColor2, setBorderColor2] = useState('#ffffff');
const [borderColor3, setBorderColor3] = useState('#ffffff');
const [borderColor4, setBorderColor4] = useState('#ffffff');
const [borderColor5, setBorderColor5] = useState('#ffffff');

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <CommonHeader children="Preferences" />
            </View>
            <View style={styles.body}>
                <View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.headerText}>Choose Your Preferences</Text>
                        <Text style={styles.subtitleText}>
                            Click on the icons to tell us about your preferences while evaluating a Credit Card
                        </Text>
                    </View>
                    <View style={styles.firstRow}>
                        <View style={{borderColor: borderColor, borderWidth: 1.5, borderRadius: 24}}>
                            <TouchableOpacity onPress={() => setBorderColor('#4D2D8F')}>
                                <PopularityofCardIssuer />
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor: borderColor2, borderWidth: 1.5, borderRadius: 24}}>
                            <TouchableOpacity onPress={() => setBorderColor2('#4D2D8F')}>
                                <PremiumNature />
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor: borderColor3, borderWidth: 1.5, borderRadius: 24}}>
                            <TouchableOpacity onPress={() => setBorderColor3('#4D2D8F')}>
                                <ValueForMoney />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondRow}>
                    <View style={{borderColor: borderColor4, borderWidth: 1.5, borderRadius: 24}}>
                        <TouchableOpacity onPress={() => setBorderColor4('#4D2D8F')}>
                            <LowerFees />
                            </TouchableOpacity>

                    </View>
                    <View style={{borderColor: borderColor5, borderWidth: 1.5, borderRadius: 24}}>
                        <TouchableOpacity onPress={() => setBorderColor5('#4D2D8F')}>
                            <BestOffers />
                        </TouchableOpacity>

                    </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#4D2D8F', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: Responsive.height(48) }}>
                    <Text style={{color: '#ffffff', fontSize: 16, 
                     fontFamily: Platform.select({
                        ios:'Exo2-Bold',
                        android:'Exo2Bold'
                      }),
                    }}>
                    Set Preferences
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d2d8f',
    },
    body: {
        padding: SIZES.padding,
        paddingVertical: 40,
        borderRadius: 32,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {

    },
    headerText: { fontSize: 18, 
        fontFamily:Platform.select({
            ios:'Exo2-Bold',
            android:'Exo2Bold'
          }),
         color: '#172B4D', paddingVertical: 8 },
    subtitleText: { fontSize: 12, color: '#6F7FAF', 
    fontFamily:Platform.select({
        ios:'Exo2-Medium',
        android:'Exo2Medium'
      }),
},
    firstRow: { alignContent: 'space-between', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 24 },
    secondRow: { justifyContent: 'space-between', flexDirection: 'row', width: '63%' },
    borderWidth: { borderWidth: 2, borderRadius: 26, borderColor: '#4D2D8F' },
});
