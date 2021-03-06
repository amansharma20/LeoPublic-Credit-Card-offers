/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
import { Badge } from 'react-native-elements';

const prefernceArray = [0, 0, 0];


export default function ChoosePreferences() {

    const navigation = useNavigation();
    const [value, onSetValue] = useState(0);
    const nextValueSelected = () => onSetValue(value + 1);

    const [showCardBadge, setShowCardBadge] = useState(false);
    const [showNature, setShowNature] = useState(false);
    const [showMoney, setShowMoney] = useState(false);
    const [showFees, setShowFees] = useState(false);
    const [showOffers, setShowOffers] = useState(false);

    

    const addPreference = (id) => {

        switch (i) {
            case 1:
                break;

            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                break
        }

        if (value <= 2) {
            prefernceArray[value] = id
            nextValueSelected()
            console.log(prefernceArray)
            setShowCardBadge(!showCardBadge)
        }
    };



    useEffect(() => {

    }, []);

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
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => addPreference(1)}>
                                <PopularityofCardIssuer />
                            </TouchableOpacity>
                            {showCardBadge &&
                                <Badge
                                    status="error"
                                    value={1}
                                    containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                    badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                    textStyle={{ color: '#ffffff' }}

                                />
                            }
                            <Text style={styles.textPreference} >Popularity of {'\n'}Card Issuer</Text>
                        </View>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(2)}>
                                <PremiumNature />
                            </TouchableOpacity>

                            {showNature && <Badge
                                status="error"
                                value={2}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}

                            />
                            }

                            <Text style={styles.textPreference} >Premium{'\n'}Nature</Text>
                        </View>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(3)}>
                                <ValueForMoney />
                            </TouchableOpacity>
                            {showMoney && <Badge
                                status="error"
                                value={3}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}

                            />}

                            <Text style={styles.textPreference} >Value for{'\n'}Money</Text>
                        </View>
                    </View>
                    <View style={styles.secondRow}>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(4)}>
                                <LowerFees />
                            </TouchableOpacity>
                            {showFees && <Badge
                                status="error"
                                value={4}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}

                            />}

                            <Text style={styles.textPreference} >Lower Fees</Text>
                        </View>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(5)}>
                                <BestOffers />
                            </TouchableOpacity>
                            {showOffers && <Badge
                                status="error"
                                value={5}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}
                            />}

                            <Text style={styles.textPreference} >Best Offers</Text>
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#4D2D8F', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: Responsive.height(48) }}>
                    <Text style={{
                        color: '#ffffff', fontSize: 16,
                        fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
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
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {

    },
    headerText: {
        fontSize: 18,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
        color: '#172B4D',
        paddingVertical: 8,
    },
    subtitleText: {
        fontSize: 12, color: '#6F7FAF',
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    firstRow: {
        alignContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 24,
    },
    secondRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '63%',
    },
    borderWidth: {
        borderWidth: 2,
        borderRadius: 26,
        borderColor: '#4D2D8F',
    },
    textPreference: {
        textAlign: 'center',
        color: '#7A869A',
        fontFamily: Platform.select({
            ios: 'Exo2-Regular',
            android: 'Exo2Regular',
        }),
        fontWeight: '600',
        paddingTop: 5,
    },
});
