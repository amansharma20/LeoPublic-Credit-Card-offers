/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SIZES } from '../../constants';

const CompareModalItemFlatlist = ({ title, card1, card2 }) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.subtitleText}>{card1}</Text>
        </View>
        <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.subtitleText}>{card2}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderBottomColor: '#f1f2f7',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleTextContainer: {
        paddingHorizontal: 8,
        alignItems: 'center',
        width: '40%',
    },
    titleText: {
        fontSize: SIZES.h3,
        color: '#797E96',
        lineHeight: 20,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily:Platform.select({
            ios:'Exo2-Medium',
            android:'Exo2Medium'
          }),
    },
    subtitleText: {
        fontSize: 20,
        color: '#1C1B1B',
        marginTop: 2,
        fontFamily:Platform.select({
            ios:'Exo2-Bold',
            android:'Exo2Bold'
          }),
    },
});

export default CompareModalItemFlatlist;
