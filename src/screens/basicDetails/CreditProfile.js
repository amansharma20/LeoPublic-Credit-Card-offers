/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import CommonHeaderWithBackButton from '../../components/headers/CommonHeaderWithBackButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { images } from '../../constants';

export default function CreditProfile() {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);

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
                        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.continueButtonContainer}>
                            <Text style={styles.continueText}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {showModal && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        statusBarTranslucent={true}
                        showModal={showModal}
                        onRequestClose={() => setShowModal(false)}>
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContainer}>
                                <View>
                                    <Image source={images.errorCross} style={styles.errorCrossContainer} />
                                </View>
                                <View>
                                    <Text style={styles.modalErrorText}>
                                        We’re sorry! No credit cards match your interest. Please try again.
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => setShowModal(false)} style={styles.modalButtonContainer}>
                                    <Text style={styles.modalContinueButtonText}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )}
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
    modalContainer: {
        backgroundColor: '#ffffff',
        width: '75%',
        height: '40%',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: '55%',
        marginHorizontal: '12%',
        justifyContent: 'space-around',
        padding: 12,
    },
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },
    errorCrossContainer: {
        width: 120,
        height: 120,
    },
    modalErrorText: {
        color: '#7B7B7B',
        fontSize: 12,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
        textAlign: 'center',
    },
    modalButtonContainer: {
        backgroundColor: '#4D2D8F',
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 8,
    },
    modalContinueButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },


});
