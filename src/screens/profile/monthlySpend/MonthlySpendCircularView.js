
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { SIZES } from '../../../constants/theme';
import { Responsive } from '../../../utils/layouts/Layout';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/core';


export default function MonthlySpendCircularView(props) {

    const spends = props.spends
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#ffffff', padding: SIZES.padding, borderBottomColor: '#e4e7f0', borderBottomWidth: 1 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    color: '#172B4D', fontFamily: Platform.select({
                        ios: 'Exo2-Bold',
                        android: 'Exo2Bold',
                    }),
                    fontSize: 18
                }}>
                    Monthly Spend Pattern
                </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('MonthlySpend')
                }}>
                    <Text style={{ marginRight: 10, color: '#4D2D8F', }}>
                        EDIT
                    </Text>
                </TouchableOpacity>


            </View>
            <Text style={{
                color: '#172B4D', fontFamily: Platform.select({
                    ios: 'Exo2-Bold',
                    android: 'Exo2Bold',
                }),
                fontSize: 32,
                paddingVertical: 20
            }}>
                ₹ {spends.TotalSpend}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    color: '#7a869a', fontFamily: Platform.select({
                        ios: 'Exo2-Bold',
                        android: 'Exo2Bold',
                    }),
                }}>
                    Monthly Expense
                </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('MonthlySpend')
                }}>
                    <Text style={{ marginRight: 10 }}>
                        EDIT
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }),
                    }}>
                        60%
                    </Text>
                    <AnimatedCircularProgress
                        style={{ paddingHorizontal: SIZES.padding2 }}
                        size={75}
                        width={5}
                        fill={30}
                        tintColor="#4D2D8F"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{
                        marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }), color: '#7A869A',
                    }}>
                        Shopping
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }),
                    }}>
                        60%
                    </Text>
                    <AnimatedCircularProgress
                        style={{ paddingHorizontal: SIZES.padding2 }}

                        size={75}
                        width={5}
                        fill={30}
                        tintColor="#4D2D8F"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{
                        marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }), color: '#7A869A',
                    }}>
                        Groceries
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }),
                    }}>
                        60%
                    </Text>
                    <AnimatedCircularProgress
                        style={{ paddingHorizontal: SIZES.padding2 }}

                        size={75}
                        width={5}
                        fill={30}
                        tintColor="#4D2D8F"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{
                        marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }), color: '#7A869A',
                    }}>
                        Travel
                    </Text>
                </View>
            </View>
            <View style={{ paddingVertical: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }),
                    }}>
                        60%
                    </Text>
                    <AnimatedCircularProgress
                        style={{ paddingHorizontal: SIZES.padding2 }}
                        size={75}
                        width={5}
                        fill={30}
                        tintColor="#4D2D8F"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{
                        marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }), color: '#7A869A',
                    }}>
                        Entertainment
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }),
                    }}>
                        60%
                    </Text>
                    <AnimatedCircularProgress
                        style={{ paddingHorizontal: SIZES.padding2 }}
                        size={75}
                        width={5}
                        fill={30}
                        tintColor="#4D2D8F"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{
                        marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }), color: '#7A869A',
                    }}>
                        Others
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }),
                    }}>
                        60%
                    </Text>
                    <AnimatedCircularProgress
                        style={{ paddingHorizontal: SIZES.padding2 }}
                        size={75}
                        width={5}
                        fill={30}
                        tintColor="#4D2D8F"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{
                        marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                            ios: 'Exo2-Bold',
                            android: 'Exo2Bold',
                        }), color: '#7A869A',
                    }}
                        numberOfLines={2}
                    >
                        Total Spend{'\n'}(Credit Card)
                    </Text>
                </View>
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
        //padding: SIZES.padding,
    },
    backgroundColorView: {
        backgroundColor: '#4d2d8f',
    },
    profilePictureHeaderContainer: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: SIZES.padding,
        marginTop: Responsive.height(50),
    },
    pfpAlignmentContainer: { alignItems: 'center', marginTop: -65 },
    profileImage: {
        width: Responsive.width(88),
        height: Responsive.height(88),
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 1,
    },
    nameText: {
        fontSize: 18,
        color: '#060417',
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
        lineHeight: 28,
        paddingTop: 8,
    },
    emailText: {
        fontSize: SIZES.h3,
        color: '#6F7FAF',
        lineHeight: 20,
        paddingVertical: 8,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    birthDateText: {
        fontSize: SIZES.h3, color: '#6F7FAF', lineHeight: 20,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    }
    ,
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#e4e7f0',
        backgroundColor: '#ffffff',
    },
    topContainerBackgroundColor: {
        backgroundColor: '#effafa',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    topContainerHeaderText: {
        color: '#6F7FAF', fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    topContainerSubtitleText: {
        color: '#060417', fontSize: 18,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    addContainer: {
        padding: SIZES.padding,
        borderBottomWidth: 1,
        borderColor: '#e4e7f0',
        backgroundColor: '#ffffff',
    },
    addContainerBottom: {
        padding: SIZES.padding,
        borderBottomWidth: 1,
        borderColor: '#e4e7f0',
        backgroundColor: '#ffffff',
        paddingBottom: 60,
    },
    addContainerTextContainer: {
        padding: SIZES.padding,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e7f0',
    },
    addContainerHeaderText: {
        paddingBottom: 22, fontSize: 16,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    addContainerSubtitleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F9F4F2',
        padding: SIZES.padding,
        borderRadius: 16,
        alignItems: 'center',
    },
    addContainerSubtitleText: {
        color: '#1C1B1B', fontSize: 16,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    addMonthlyExpenseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0FAFB',
        padding: SIZES.padding,
        borderRadius: 16,
        alignItems: 'center',
    },
    logOutButtonContainer: { backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#e4e7f0' },

});
