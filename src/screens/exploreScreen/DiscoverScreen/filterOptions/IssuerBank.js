/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../../../constants/index/';
import { Responsive } from '../../../../utils/layouts/Layout';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function IssuerBank() {
    const navigation = useNavigation();
    const [checkboxState, setCheckboxState] = useState(false);
    const onCardClick = () => {
        setCheckboxState(!checkboxState);
    };
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
                        onPress={() => onCardClick}
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
                        isChecked={checkboxState}
                        disableBuiltInState
                        onPress={() => onCardClick}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        ICICI Bank
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState}
                        disableBuiltInState
                        onPress={() => onCardClick}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        Axis Bank
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState}
                        disableBuiltInState
                        onPress={() => onCardClick}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
                    />
                    <Text style={styles.bankName}>
                        Bank of Baroda
                    </Text>
                </View>
                <View style={styles.checkBoxContainerStyle}>
                    <BouncyCheckbox
                        style={styles.checkBoxContainer}
                        isChecked={checkboxState}
                        disableBuiltInState
                        onPress={() => onCardClick}
                        size={20}
                        iconStyle={styles.checkBoxIconStyle}
                        fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                        unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
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
        fontFamily: 'Exo2Bold',
    },
    checkBoxContainer: { marginTop: 0, width: 24, height: 24, borderRadius: 4 },
    checkBoxIconStyle: { borderRadius: 4, borderWidth: 0 },
    checkBoxContainerStyle: { alignItems: 'center', flexDirection: 'row', paddingVertical: SIZES.padding2, paddingHorizontal: 8 },
    bankName: { fontSize: 15, color: '#172B4D', paddingLeft: 4, fontFamily: 'Exo2Medium' },
});
