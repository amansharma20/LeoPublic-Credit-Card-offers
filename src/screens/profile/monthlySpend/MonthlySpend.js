/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../../constants/theme';
import PreferencesScreenHeader from '../../../components/headers/PreferencesHeader';
import ShoppingIcon from '../../../assets/svgs/shoppingIcon.svg';
import TravelIcon from '../../../assets/svgs/travelIcon.svg';
import GroceriesIcon from '../../../assets/svgs/groceriesIcon.svg';
import EntertainmentIcon from '../../../assets/svgs/entertainmentIcon.svg';
import OthersIcon from '../../../assets/svgs/othersIcon.svg';
import TotalSpendIcon from '../../../assets/svgs/totalSpendIcon.svg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Responsive } from '../../../utils/layouts/Layout';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function MonthlySpend() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View>
                <PreferencesScreenHeader />
            </View>
            <View style={styles.body}>
                <View style={{ alignItems: 'center', height: 220 }}>
                    <AnimatedCircularProgress
                        style={styles.animatedCircleSize}
                        size={200}
                        width={12}
                        fill={30}
                        tintColor="#CD4D78"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: -140,
                    //  fontFamily: 'Exo2Medium' 
                     }}>
                        Monthly{'\n'}Expenses{'\n'}20,000
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <ShoppingIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Shopping
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        1000
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <TravelIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                        Travel
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        1000
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <GroceriesIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                        Groceries
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        1000
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <EntertainmentIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                        Entertainment
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        1000
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <OthersIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                        Others
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        1000
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <TotalSpendIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Shopping
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        1000
                    </Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#4D2D8F', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: Responsive.height(48) }}>
                    <Text style={{ color: '#ffffff', fontSize: 16, 
                    // fontFamily: 'Exo2Bold' 
                    }}>
                        Set Preferences
                    </Text>
                </TouchableOpacity>
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
        padding: SIZES.padding,
        paddingVertical: 40,
        borderRadius: 32,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
    },
    titleContainer: {

    },
    headerText: { fontSize: 18, fontWeight: '700', color: '#172B4D', paddingVertical: 8 },
    subtitleText: { fontSize: 12, color: '#6F7FAF' },
    firstRow: { alignContent: 'space-between', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 24 },
    secondRow: { justifyContent: 'space-around', flexDirection: 'row' },
    borderWidth: { borderWidth: 2, borderRadius: 26, borderColor: '#4D2D8F' },
    itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eff0f2' },
    leftContainer: { flexDirection: 'row', alignItems: 'center' },
    leftText: { fontSize: 14, color: '#455671',
    //  fontFamily: 'Exo2Medium'
     },
});
