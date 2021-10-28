/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    FlatList,
    ImageBackground,
    Platform,
    Animated,
    Image
} from 'react-native';
import BackButtonWhite from '../../assets/svgs/backButtonWhite.svg';
import AxisLogo from '../../assets/svgs/axisLogo.svg';
import Stars from '../../assets/svgs/stars.svg';
import Visa from '../../assets/svgs/visasvg.svg';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../constants';
import { Responsive } from '../../utils/layouts/Layout';
import CompareModalItemFlatlist from '../../components/flatlistsItems/CompareModalItemFlatlist';
import compareModalData from '../../assets/dummyData/compareModalData';
import { applicationProperties } from '../../../application.properties';


export default function CompareCardsScreen(props) {




    const compareCardData = props.route.params.cardCompareData
    const cardsArray = props.route.params.selectedCardArray

    console.log(cardsArray[0].CardName)

    const navigation = useNavigation();
    const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true });

    const renderCompareModalItem = ({ item }) => (
        <CompareModalItemFlatlist
            title={item.title}
            card1={item.card1}
            card2={item.card2}
        />
    );

    return (
        <AnimatedScrollView style={styles.container}
            scrollEventThrottle={16}
            {...{ onScroll }}
        >
            <View style={styles.compareModalContainer}>
                <View style={styles.headerContainer}>
                    <View
                        style={styles.headerButtonsContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <BackButtonWhite />
                        </TouchableOpacity>
                        <View style={styles.compareHeaderTextContainer}>
                            <Text style={styles.modalHeaderText}>Compare</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.modalBackgroundColor}>
                    <View style={styles.comparedCardsContainer}>
                        <ImageBackground
                            source={images.compareCardOne}
                            style={styles.comparedCardImage}
                            imageStyle={styles.backgroundImageStyle}>
                            <View>
                                <Image
                                    source={{ uri: applicationProperties.imageUrl + cardsArray[0].Bank.LogoStoragePath }}
                                    style={{ width: 80, height: 25, resizeMode: 'contain', }} />

                                <Text style={styles.cardTypeText}>
                                    {cardsArray[0].CardName}
                                </Text>
                            </View>
                            <View style={styles.cardItemsBottomContainer}>
                                <Stars />
                                <Visa />
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={images.compareCardTwo}
                            style={styles.comparedCardImage}
                            imageStyle={styles.backgroundImageStyle}>
                            <View>

                                <Image
                                    source={{ uri: applicationProperties.imageUrl + cardsArray[1].Bank.LogoStoragePath }}
                                    style={{ width: 80, height: 25, resizeMode: 'contain', }} />

                                <Text style={styles.cardTypeText}>
                                    {cardsArray[1].CardName}
                                </Text>
                            </View>
                            <View style={styles.cardItemsBottomContainer}>
                                <Stars />
                                <Visa />
                            </View>
                        </ImageBackground>
                    </View>
                    {/* FLATLIST  */}
                    <View style={styles.flatlistBackgroundColor}>
                        <FlatList
                            data={compareCardData}
                            renderItem={renderCompareModalItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
        </AnimatedScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,
        backgroundColor: '#4d2d8f',
        height: Responsive.height(190),
        paddingTop: Platform.select({
            ios: 40,
            android: 0,
        }),
    },
    headerButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
    },
    modalBackgroundColor: {
        backgroundColor: '#4d2d8f'
    },
    compareHeaderTextContainer: {
        marginLeft: '38%'
    },
    compareModalContainer: {
        flex: 1,
    },
    iconSizeLeft: {
        width: 34,
        height: 34
    },
    iconSizeRight: {
        width: 28,
        height: 28
    },
    modalHeaderText: {
        fontSize: 24,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
        color: '#ffffff',
    },
    leftIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    comparedCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 18,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    comparedCardImage: {
        width: Responsive.width(131),
        height: Responsive.height(172),
        marginTop: -90,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    backgroundImageStyle: {
        resizeMode: 'contain',
        borderRadius: 12,
    },
    cardTypeText: {
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
        fontSize: 8,
        paddingVertical: 4,
        color: '#ffffff',
    },
    cardItemsBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flatlistBackgroundColor: {
        backgroundColor: '#fff'
    },
});
