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
import { Badge } from 'react-native-elements'
import update from 'immutability-helper';


export default function ChoosePreferences() {

    const navigation = useNavigation();
    const [value, onSetValue] = useState(0);
    const onPressValue = () => onSetValue(value + 1);

    const [cardIssuer, setCardIssuer] = useState();
    const [nature, setNature] = useState();
    const [money, setMoney] = useState();
    const [fees, setFees] = useState();
    const [offers, setOffers] = useState();

    const [selectedId, setSelectedId] = useState();

    const prefernceArray = [];
    const state2 = update(prefernceArray, { $push: [selectedId] }); // ['x', 'y']

    const preferenceClicked = (id) => {

        setSelectedId(id)
        console.log(state2)
        switch (id) {
            case 1:
                setCardIssuer(prefernceArray.length)
                setNature()
                setMoney()
                setFees()
                setOffers()
                break;
            case 2:
                setCardIssuer()
                setNature(prefernceArray.length)
                setMoney()
                setFees()
                setOffers()
                break;
            case 3:
                setCardIssuer()
                setNature()
                setMoney(prefernceArray.length)
                setFees()
                setOffers()
                break;
            case 4:
                setCardIssuer()
                setNature()
                setMoney()
                setFees(prefernceArray.length)
                setOffers()
                break;
            case 5:
                setCardIssuer()
                setNature()
                setMoney()
                setFees()
                setOffers(prefernceArray.length)
                break;
            default:
                setCardIssuer()
                setNature()
                setMoney()
                setFees()
                setOffers()
                break;
        }
    }

    useEffect(() => {

    });

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
                            <TouchableOpacity onPress={() => preferenceClicked(1)}>
                                <PopularityofCardIssuer />
                            </TouchableOpacity>
                            <Badge
                                status="error"
                                value={cardIssuer}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}
                                onPressValue={onPressValue}
                            />
                            <Text style={styles.textPreference} >Popularity of {'\n'}Card Issuer</Text>
                        </View>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(2)}>
                                <PremiumNature />
                            </TouchableOpacity>
                            <Badge
                                status="error"
                                value={nature}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}
                                onPressValue={onPressValue}
                            />
                            <Text style={styles.textPreference} >Premium{'\n'}Nature</Text>
                        </View>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(3)}>
                                <ValueForMoney />
                            </TouchableOpacity>
                            <Badge
                                status="error"
                                value={money}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}
                                onPressValue={onPressValue}
                            />
                            <Text style={styles.textPreference} >Value for{'\n'}Money</Text>
                        </View>
                    </View>
                    <View style={styles.secondRow}>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(4)}>
                                <LowerFees />
                            </TouchableOpacity>
                            <Badge
                                status="error"
                                value={fees}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}
                                onPressValue={onPressValue}
                            />
                            <Text style={styles.textPreference} >Lower Fees</Text>
                        </View>
                        <View style={{ borderColor: '#ffffff', borderWidth: 1.5, borderRadius: 24 }}>
                            <TouchableOpacity onPress={() => preferenceClicked(5)}>
                                <BestOffers />
                            </TouchableOpacity>
                            <Badge
                                status="error"
                                value={offers}
                                containerStyle={{ position: 'absolute', width: 10, height: 10, color: '#ffffff' }}
                                badgeStyle={{ backgroundColor: '#4D2D8F', marginLeft: 130 }}
                                textStyle={{ color: '#ffffff' }}
                            />
                            <Text style={styles.textPreference} >Best Offers</Text>
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#4D2D8F', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: Responsive.height(48) }}>
                    <Text style={{
                        color: '#ffffff', fontSize: 16,
                        fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold'
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
            android: 'Exo2Bold'
        }),
        color: '#172B4D',
        paddingVertical: 8
    },
    subtitleText: {
        fontSize: 12, color: '#6F7FAF',
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium'
        }),
    },
    firstRow: {
        alignContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 24
    },
    secondRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '63%'
    },
    borderWidth: {
        borderWidth: 2,
        borderRadius: 26,
        borderColor: '#4D2D8F'
    },
    textPreference: {
        textAlign: 'center',
        color: '#7A869A',
        fontFamily: Platform.select({
            ios: 'Exo2-Regular',
            android: 'Exo2Regular'
        }),
        fontWeight: '600',
        paddingTop: 5
    }
});
