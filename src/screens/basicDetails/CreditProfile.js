/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import CommonHeaderWithBackButton from '../../components/headers/CommonHeaderWithBackButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function CreditProfile() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <CommonHeaderWithBackButton children="Your Credit Profile" />
            <View style={styles.body}>
                <View>
                    <Text style={styles.headerText}>Monthly Spend</Text>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Percentage of monthly income
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Percentage of total spend via Credit Card
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.headerText}>Category-wise spend break-up </Text>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Shopping
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Travel
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Groceries
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Entertainment
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Others
                        </Text>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={20}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.headerText}>Category-wise spend break-up </Text>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Popularity of Card Issuer
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                        </View>


                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Value for Money
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Premium Label
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Best Offers
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText}>
                            Lower Fees
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                            <View style={styles.animatedCircleContainer}>
                                <AnimatedCircularProgress
                                    size={20}
                                    width={1}
                                    fill={100}
                                    tintColor="#4D2D8F"
                                    backgroundColor="#3d5875"
                                />
                                <Text style={styles.percentageText}>45%</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.skipButtonContainer}>
                            <Text style={styles.skipText}>
                                Skip
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.continueButtonContainer}>
                            <Text style={styles.continueText}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d2d8f',
    },
    body: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        flex: 1,
        padding: SIZES.padding,
    },
    headerText: {
        color: '#1C1B1B',
        fontSize: 16,
        fontFamily: Platform.select({
            ios: 'Exo2-SemiBold',
            android: 'Exo2SemiBold',
        }),
        marginVertical: 24,
    },
    subtitleText: {
        fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
        color: '#000000',
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    animatedCircleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    percentageText: {
        color: '#4D2D8F',
        fontSize: 6,
        marginLeft: -16,
        fontFamily: Platform.select({
            ios: 'Exo2-ExtraBold',
            android: 'Exo2ExtraBold',
        }),
    },
    buttonsContainer: {
        marginVertical: 28,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    skipButtonContainer: {
        width: 140,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4D2D8F',
        borderRadius: 8,
    },
    skipText: {
        color: '#4D2D8F',
        fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    continueButtonContainer: {
        width: 140,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4D2D8F',
        borderRadius: 8,
    },
    continueText: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
});
