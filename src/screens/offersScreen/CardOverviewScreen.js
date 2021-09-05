/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SIZES } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';
import BackButtonPurple from '../../../src/assets/svgs/backButtonPurple.svg';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { icons } from '../../../src/constants';
import { useNavigation } from '@react-navigation/core';



export default function CardOverviewScreen(props) {

    const cardData = props.route.params.card;

    const navigation = useNavigation();

    return (
        <View style={styles.modalContainer}>
            {/* HEADER  */}
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButtonPurple />
                </TouchableOpacity>
                <Text style={styles.modalHeaderText}>My Cards</Text>
                <View style={styles.rightIconContainer}>
                    <TouchableOpacity >
                        <Image source={icons.add} style={styles.iconSizeRight} />
                    </TouchableOpacity>

                </View>
            </View>
            <ScrollView style={{ paddingHorizontal: SIZES.padding2 }}>
                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Issuing Bank</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.Bank.Name}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Card Program</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.CardName}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Joining Fees</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.JoiningFees}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Annual Fees</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.AnnualFees}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Interest Rate</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.InterestRate}%</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Credit Limit</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.CreditLimit}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Card Level</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.CardLevel}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Reward Points Issued</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.RewardPointIssuedPer100RsSpend}%</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Forex Markup</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.ForexMarkUpInPercent}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Minimum Spend</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.MinSpendToWaiveAnnualFees}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Redemption Handling Fee</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.RedemptionHandlingFee}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Over-limit Charge</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.OverLimitCharge}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Late Payment Fee</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.LatePaymentFee}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Cash Withdrawal Charges</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.CashWithdrawalCharges}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Key Highlights</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.KeyHighlights}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Travel Benefits</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>{cardData.BankCard.TravelBenefits}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Fuel Benefits</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹ {cardData.BankCard.TravelBenefits}</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Dining</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Dining</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Dining</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Hotel Benefits</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Reward Booster</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Reward Booster Sectors</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Lounge Access</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Card Focus Segment</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Priority Pass Membership</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Add-on Card</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>

                <View style={styles.textContainerMain}>
                    <Text style={styles.titleText}>Best Suited for</Text>
                </View>
                <View style={[styles.textContainer, { paddingBottom: 50 }]}>
                    <Text style={styles.subtitleText}>₹5000</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        marginTop: Platform.select({
            ios: 20,
            android: 20,
        }),
    },
    body: {
        paddingTop: SIZES.padding2,
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
    },
    innerContainer: {
        backgroundColor: '#f0e9ff',
        paddingHorizontal: SIZES.padding2,
        paddingVertical: SIZES.padding2,
        elevation: 3,
        borderRadius: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        borderWidth: 1,
        borderColor: '#4f2f90',
    },
    headerTextContainer: {
        // alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#797E96',
        fontSize: 18,
        fontFamily: Platform.select({
            ios: 'Exo2-Regular',
            android: 'Exo2Regular',
        }),
    },
    subText: {
        color: '#1c1b1b',
        fontSize: 20,
        fontFamily: Platform.select({
            ios: 'Exo2-SemiBold',
            android: 'Exo2SemiBold',
        }),
        width: 200,
    },
    imageSize: {
        width: Responsive.width(80),
        height: Responsive.width(80),
        resizeMode: 'contain',
    },
    flatlistContainer: {
        paddingVertical: SIZES.padding2,
        paddingHorizontal: SIZES.padding,
    },
    contentContainerStyle: {
        paddingBottom: SIZES.padding2,
    },
    modalContentContainerStyle: {
        paddingBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#f1eef6',
        marginHorizontal: 90,
        padding: 10,
        marginTop: 16,
        borderRadius: 10,
        elevation: 3,
    },
    buttonText: {
        color: '#4D2D8F',
        fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    modalContainer: {
        flex: 1,
        marginTop: Platform.select({
            ios: 30,
            android: 0,
        }),
        marginHorizontal: Platform.select({
            ios: 10,
            android: 0,
        }),
    },
    iconContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: SIZES.padding2,
        alignItems: 'center',
    },
    iconSizeLeft: { width: 34, height: 34 },
    iconSizeRight: { width: 28, height: 28 },
    modalHeaderText: {
        fontSize: 24,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
        color: '#4D2D8F',
    },
    leftIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightIconContainer: {
        width: 44,
        height: 44,
        backgroundColor: '#dbd5e9',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatlistDetailsContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: SIZES.padding2,
        width: ScreenWidth / 2.5,

    },
    flatlistDetailsInnerContainer: {
        backgroundColor: '#f0e9ff',
        width: '90%',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 3,
        paddingVertical: SIZES.padding2,
        paddingHorizontal: SIZES.padding2,

        borderWidth: 1,
        borderColor: '#4f2f90',
    },
    titleText: {
        fontSize: SIZES.h3,
        color: '#797E96',
        lineHeight: 20,
        fontFamily: Platform.select({
            ios: 'Exo2-Regular',
            android: 'Exo2Regular',
        }),
    },
    subtitleText: {
        fontSize: 18,
        color: '#1C1B1B',
        marginTop: 3,
        fontFamily: Platform.select({
            ios: 'Exo2-SemiBold',
            android: 'Exo2SemiBold',
        }),
    },
    textContainerMain: {
        marginTop: 24,
    },
});
