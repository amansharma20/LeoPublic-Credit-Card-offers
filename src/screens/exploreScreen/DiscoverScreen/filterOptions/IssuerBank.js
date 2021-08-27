/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../../../constants/index/';
import { Responsive } from '../../../../utils/layouts/Layout';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function IssuerBank() {
    const navigation = useNavigation();

    // THESE 6 STATES ARE TEMPORARY 

    const [checkboxState, setCheckboxState] = useState(false);
    const onCardClick = () => {
        setCheckboxState(!checkboxState);
    };

    const [checkboxState2, setCheckboxState2] = useState(false);
    const onCardClick2 = () => {
        setCheckboxState2(!checkboxState2);
    };

    const [checkboxState3, setCheckboxState3] = useState(false);
    const onCardClick3 = () => {
        setCheckboxState3(!checkboxState3);
    };

    const [checkboxState4, setCheckboxState4] = useState(false);
    const onCardClick4 = () => {
        setCheckboxState4(!checkboxState4);
    };

    const [checkboxState5, setCheckboxState5] = useState(false);
    const onCardClick5 = () => {
        setCheckboxState5(!checkboxState5);
    };

    const [checkboxState6, setCheckboxState6] = useState(false);
    const onCardClick6 = () => {
        setCheckboxState6(!checkboxState6);
    };

    const [checkboxState7, setCheckboxState7] = useState(false);
    const onCardClick7 = () => {
        setCheckboxState7(!checkboxState7);
    };

    // THESE 6 STATES ARE TEMPORARY

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.headerText}>
                    Issuer Bank
                </Text>
                <View style={styles.checkBoxContainerStyle}>
                <BouncyCheckbox
                style={styles.checkBoxContainer}
                isChecked={checkboxState}
                disableBuiltInState
                // onPress={onCardClick}
                onPress={() => setCheckboxState(!checkboxState)}
                size={20}
                iconStyle={styles.checkBoxIconStyle}
                fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
              />
                    <Text style={styles.bankName}>
                        HDFC Bank
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState2}
                        disableBuiltInState
                        onPress={() => setCheckboxState2(!checkboxState2)}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState2 ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState2 ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        ICICI Bank
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState3}
                        disableBuiltInState
                        onPress={() => setCheckboxState3(!checkboxState3)}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState3 ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState3 ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        Axis Bank
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState4}
                        disableBuiltInState
                        onPress={() => setCheckboxState4(!checkboxState4)}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState4 ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState4 ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        Bank of Baroda
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState5}
                        disableBuiltInState
                        onPress={() => setCheckboxState5(!checkboxState5)}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState5 ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState5 ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        Yes Bank
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: Responsive.height(20),
    },
    body: {
        marginLeft: -70,
        padding: 12,
    },
    flatlistContainer: {
        paddingHorizontal: SIZES.padding,
    },
    headerText: {
        fontSize: SIZES.h3,
        fontFamily:Platform.select({
            ios:'Exo2-Bold',
            android:'Exo2Bold'
          }),
    },
    checkBoxContainer: { marginTop: 0, width: 24, height: 24, borderRadius: 4 },
    checkBoxIconStyle: { borderRadius: 4, borderWidth: 0 },
    checkBoxContainerStyle: { alignItems: 'center', flexDirection: 'row', paddingVertical: SIZES.padding2, paddingHorizontal: 8 },
    bankName: { fontSize: 15, color: '#172B4D', paddingLeft: 4,
     fontFamily: Platform.select({
        ios:'Exo2-Medium',
        android:'Exo2Medium'
      }),
     },
});
