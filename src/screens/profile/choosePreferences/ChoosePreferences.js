/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../../constants/theme';
import PreferencesScreenHeader from '../../../components/headers/PreferencesHeader';
import PremiumNature from '../../../assets/svgs/premiumNature.svg';
import ValueForMoney from '../../../assets/svgs/valueForMoney.svg';
import LowerFees from '../../../assets/svgs/lowerFees.svg';
import PopularityofCardIssuer from '../../../assets/svgs/popularityofCardIssuer.svg';
import BestOffers from '../../../assets/svgs/bestOffers.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Responsive } from '../../../utils/layouts/Layout';


export default function ChoosePreferences() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <PreferencesScreenHeader />
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
                        <View>
                            <TouchableOpacity>
                                <PopularityofCardIssuer />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <PremiumNature />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <ValueForMoney />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondRow}>
                        <TouchableOpacity style={styles.borderWidth}>
                            <LowerFees />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <BestOffers />
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity style={{backgroundColor: '#4D2D8F', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: Responsive.height(48) }}>
                    <Text style={{color: '#ffffff', fontSize: 16, 
                    // fontFamily: 'Exo2Bold'
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
        borderRadius: 32,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {

    },
    headerText: { fontSize: 18, 
        // fontFamily: 'Exo2Bold',
         color: '#172B4D', paddingVertical: 8 },
    subtitleText: { fontSize: 12, color: '#6F7FAF', 
    // fontFamily: 'Exo2Medium' 
},
    firstRow: { alignContent: 'space-between', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 24 },
    secondRow: { justifyContent: 'space-between', flexDirection: 'row', width: '63%' },
    borderWidth: { borderWidth: 2, borderRadius: 26, borderColor: '#4D2D8F' },
});
