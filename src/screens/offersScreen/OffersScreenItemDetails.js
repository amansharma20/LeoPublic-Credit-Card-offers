/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants';
import OfferDetailsScreenHeader from '../../components/headers/OfferDetailsScreenHeader';
import AppleIcon from '../../assets/svgs/apple.svg';
import { Responsive } from '../../utils/layouts/Layout';
import OffersScreenItemDetailsNavigator from '../../navigation/OffersScreenItemDetailsNavigator';

export default function OffersScreenItemDetails() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <OfferDetailsScreenHeader />
            </View>
            <View style={{backgroundColor: '#4d2d8f'}}>

            <View style={{ padding: SIZES.padding2, borderTopRightRadius: 32, borderTopLeftRadius: 32, backgroundColor: '#ffffff', marginTop: 0 }}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.titleText}>Issuer Name</Text>
                        <Text style={styles.modalSubTitleText}>Axis Bank</Text>

                        <Text style={styles.titleText}>Card Name</Text>
                        <Text style={styles.subTitleText}>Regalia First</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.applyNowText}>Apply Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.offerDetailsContainer}>
                    <AppleIcon />
                    {/* <Image source={{}} style={{ width: 24, height: 24 }} /> */}
                    <Text style={styles.modalSubTitleText}>1000 off on apple watch
                        and accessories </Text>
                </View>
            </View>
            </View>

            <ScrollView>
                <OffersScreenItemDetailsNavigator />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    body: {
        padding: SIZES.padding,
    },
    titleText: {
        color: '#7A869A',
        fontSize: SIZES.h4,
    },
    subTitleText: {
        fontSize: SIZES.h3,
        fontWeight: '500',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EDEAF2',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4D2D8F',
        width: Responsive.width(98),
        height: Responsive.height(28),
        borderRadius: 12,
    },
    applyNowText: { color: '#ffffff', fontSize: 10, fontWeight: '700' },
    offerDetailsContainer: { paddingVertical: SIZES.padding2, borderBottomWidth: 1, borderColor: '#EDEAF2' },
});
