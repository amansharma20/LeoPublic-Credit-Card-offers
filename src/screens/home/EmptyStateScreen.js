/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme/';
import { Responsive } from '../../utils/layouts/Layout';
import { icons, images } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

export default function EmptyStateScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <View style={{ width: '100%', height: '100%', marginTop: Responsive.height(-130) }}>
                    <Image source={images.emptyStateCardImage} style={{ width: '100%', height: 250, resizeMode: 'contain', }} />
                </View>
            </View>
            <View style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DBF9FC', marginHorizontal: 80, height: 50, borderRadius: 12 }}>
                <TouchableOpacity onPress={() => navigation.navigate('AddCardHome')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 20, fontFamily: Platform.select({
                            ios: 'Exo2-SemiBold',
                            android: 'Exo2SemiBold'
                        })
                    }}>
                        Add Card
                    </Text>
                    <Image source={icons.emptyStateAddButton} style={{ width: 24, height: 30, resizeMode: 'contain', marginLeft: 25 }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 400,
    },
    body: {
        padding: SIZES.padding,
        alignItems: 'center',
        marginTop: Responsive.height(125),

    },
});
