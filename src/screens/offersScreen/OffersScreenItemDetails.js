/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SIZES } from '../../constants';
import OfferDetailsScreenHeader from '../../components/headers/OfferDetailsScreenHeader';
import AppleIcon from '../../assets/svgs/apple.svg';
import { Responsive } from '../../utils/layouts/Layout';
import OffersScreenItemDetailsNavigator from '../../navigation/OffersScreenItemDetailsNavigator';

export default function OffersScreenItemDetails(props) {

    const offer = props.route.params.offer;
    return (
        <View style={styles.container}>
            <View>
                <OfferDetailsScreenHeader />
            </View>
            <View style={{ backgroundColor: '#4d2d8f' }}>
                <View style={{ paddingHorizontal: SIZES.padding2, borderTopRightRadius: 32, borderTopLeftRadius: 32, backgroundColor: '#ffffff', marginTop: 0 }}>
                    <View style={styles.headerContainer}>
                        <View>
                            <Text style={styles.titleText}>Issuer Name</Text>
                            <Text style={styles.subTitleText}>{offer.Bank.Name}</Text>
                            <Text style={styles.titleText}>Card Name</Text>
                            <Text style={styles.subTitleText}>{offer.BankCard.CardName}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.applyNowText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.offerDetailsContainer}>
                        <AppleIcon />
                        <Text style={styles.modalSubTitleDetailsText}>{offer.OfferDescription}</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <OffersScreenItemDetailsNavigator offer={offer} />
            </ScrollView>
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
    },
    titleText: {
        color: '#7A869A',
        fontSize: SIZES.h4,
        paddingTop: 10,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium'
        }),
    },
    subTitleText: {
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium'
        }),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EDEAF2',
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding2,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4D2D8F',
        width: Responsive.width(98),
        height: Responsive.height(28),
        borderRadius: 12,
    },
    applyNowText: {
        color: '#ffffff', fontSize: 10,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
    offerDetailsContainer: {
        borderBottomWidth: 1, borderColor: '#EDEAF2',
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding2,
    },
    modalSubTitleDetailsText: {
        paddingTop: 10,
        fontSize: 16,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
});
