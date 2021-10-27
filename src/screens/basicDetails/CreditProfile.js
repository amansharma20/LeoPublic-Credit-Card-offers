/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Platform,
    ScrollView,
    TouchableOpacity,
    Modal,
    Image,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import CommonHeaderWithBackButton from '../../components/headers/CommonHeaderWithBackButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { images } from '../../constants';
import Slider from '@react-native-community/slider';


const SELECTDATA = [
    {
        id: '0',
        title: '1',
    },
    {
        id: '1',
        title: '2',
    },
    {
        id: '2',
        title: '3',
    },
];

export default function CreditProfile() {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [sliderValueShopping, setSliderValueShopping] = useState(0);
    const [sliderValueGroceries, setSliderValueGroceries] = useState(0);
    const [sliderValueEntertainment, setSliderValueEntertainment] = useState(0);
    const [sliderValueTravel, setSliderValueTravel] = useState(0);
    const [sliderValueOther, setSliderValueOther] = useState(0);

    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.selectedNumber, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderSelectItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#4D2D8F' : '#ffffff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{}}>
            <CommonHeaderWithBackButton children="Your Credit Profile" />
            <View style={styles.body}>
                <Text style={styles.headerText}>Monthly Spend</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.circleContainer}>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={50}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                        <Text style={styles.subtitleText}>
                            Percentage of monthly income
                        </Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.animatedCircleContainer}>
                            <AnimatedCircularProgress
                                size={50}
                                width={1}
                                fill={100}
                                tintColor="#4D2D8F"
                                backgroundColor="#3d5875"
                            />
                            <Text style={styles.percentageText}>45%</Text>
                        </View>
                        <Text style={styles.subtitleText}>
                            Percentage of monthly income
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.headerText}>Category-wise spend break-up </Text>
                    <View style={styles.subtitleContainer}>
                        <View style={styles.titleAndProgressContainer}>
                            <Text style={styles.categoryWiseText}>Shopping</Text>
                            <Text style={styles.sliderText}>{sliderValueShopping}</Text>
                        </View>
                        <Slider
                            style={styles.sliderSize}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#223EFE"
                            maximumTrackTintColor="#cecdcd"
                            thumbTintColor="#4D2D8F"
                            onSlidingComplete={value => {
                                setSliderValueShopping(value);
                                console.log(value);
                            }}
                        />
                    </View>
                    <View style={styles.subtitleContainer}>
                        <View style={styles.titleAndProgressContainer}>
                            <Text style={styles.categoryWiseText}>Travel</Text>
                            <Text style={styles.sliderText}>{sliderValueTravel}</Text>
                        </View>
                        <Slider
                            style={styles.sliderSize}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#223EFE"
                            maximumTrackTintColor="#cecdcd"
                            thumbTintColor="#4D2D8F"
                            onSlidingComplete={value => {
                                setSliderValueTravel(value);
                                console.log(value);
                            }}
                        />
                    </View>
                    <View style={styles.subtitleContainer}>
                        <View style={styles.titleAndProgressContainer}>
                            <Text style={styles.categoryWiseText}>Groceries</Text>
                            <Text style={styles.sliderText}>{sliderValueGroceries}</Text>
                        </View>
                        <Slider
                            style={styles.sliderSize}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#223EFE"
                            maximumTrackTintColor="#cecdcd"
                            thumbTintColor="#4D2D8F"
                            onSlidingComplete={value => {
                                setSliderValueGroceries(value);
                                console.log(value);
                            }}
                        />
                    </View>
                    <View style={styles.subtitleContainer}>
                        <View style={styles.titleAndProgressContainer}>
                            <Text style={styles.categoryWiseText}>Entertainment</Text>
                            <Text style={styles.sliderText}>{sliderValueEntertainment}</Text>
                        </View>
                        <Slider
                            style={styles.sliderSize}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#223EFE"
                            maximumTrackTintColor="#cecdcd"
                            thumbTintColor="#4D2D8F"
                            onSlidingComplete={value => {
                                setSliderValueEntertainment(value);
                                console.log(value);
                            }}
                        />
                    </View>

                    <View style={styles.subtitleContainer}>
                        <View style={styles.titleAndProgressContainer}>
                            <Text style={styles.categoryWiseText}>Others</Text>
                            <Text style={styles.sliderText}>{sliderValueOther}</Text>
                        </View>
                        <Slider
                            style={styles.sliderSize}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#223EFE"
                            maximumTrackTintColor="#cecdcd"
                            thumbTintColor="#4D2D8F"
                            onSlidingComplete={value => {
                                setSliderValueOther(value);
                                console.log(value);
                            }}
                        />
                    </View>
                </View>

                <View style={{}}>
                    <Text style={styles.headerText}>
                        Rank the importance while choosing Credit Card
                    </Text>
                    <View style={{ paddingHorizontal: 28 }}>
                        <Text style={styles.categoryWiseText}>
                            Popularity of Card Issuer
                        </Text>
                        <View style={{}}>
                            <FlatList
                                data={SELECTDATA}
                                renderItem={renderSelectItem}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}
                                contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.skipButtonContainer}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShowModal(true)}
                        style={styles.continueButtonContainer}>
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>
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
                                    <Image
                                        source={images.errorCross}
                                        style={styles.errorCrossContainer}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.modalErrorText}>
                                        We’re sorry! No credit cards match your interest. Please try
                                        again.
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setShowModal(false)}
                                    style={styles.modalButtonContainer}>
                                    <Text style={styles.modalContinueButtonText}>Continue</Text>
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
    circleContainer: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        elevation: 8,
        backgroundColor: '#ffffff',
        borderRadius: 2,
    },
    subtitleText: {
        fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
        color: '#000000',
        textAlign: 'center',
    },
    categoryWiseText: {
        fontSize: 18,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
        color: '#000000',
    },
    sliderText: {
        color: '#4D2D8F',
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
        fontSize: 18,
    },
    sliderSize: { width: '100%', height: 40 },
    boxes: {
        width: 40,
        height: 26,
        borderWidth: 0.5,
        borderColor: '#000000',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    subtitleContainer: {
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    titleAndProgressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    animatedCircleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    percentageText: {
        color: '#4D2D8F',
        fontSize: 12,
        marginLeft: 12,
        fontFamily: Platform.select({
            ios: 'Exo2-ExtraBold',
            android: 'Exo2ExtraBold',
        }),
        position: 'absolute',
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
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        height: 40, width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
    },
    selectedNumber: {
        fontSize: 15,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
});
