/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback, useRef } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    useWindowDimensions,
    StatusBar,
    Text,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import { icons, SIZES } from '../../constants';

const OnBoardingCarousel = ({ images, descriptions, onPress, titlesText }) => {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
        console.log(viewableItems);
    }, []);

    const flatlistRef = useRef();

    const onPressFunction = () => {
        console.log(activeIndex);
        if (activeIndex < 5) {
            flatlistRef.current.scrollToIndex({ index: activeIndex + 1 });
        } else {
            navigation.navigate('BottomTabBarNavigator');
        }
    };

    return (
        <View>
            <FlatList
                ref={flatlistRef}
                data={images}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <View style={[styles.image, { width: windowWidth, alignItems: 'center', justifyContent: 'center', }]}>
                                <Image source={{ uri: item }} style={{ width: '100%', height: '100%', resizeMode: 'contain', marginTop: 0 }} />
                            </View>
                        </View>
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 0}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
                scrollEnabled={false}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 30, paddingHorizontal: 29 }}>
                <TouchableOpacity>
                    <Text style={{
                        color: '#4D2D8F', fontSize: 18,
                        fontFamily: Platform.select({
                            ios: 'Exo2-Medium',
                            android: 'Exo2Medium'
                        }),
                    }}>
                        Skip
                    </Text>

                </TouchableOpacity>
                <View style={styles.dots}>
                    {images.map((image, index) => (
                        <View
                            style={[
                                styles.dot,
                                {
                                    backgroundColor:
                                        index === activeIndex ? '#3511A3' : '#E7E7EA',
                                    width: index === activeIndex ? 32 : 8,
                                    height: index === activeIndex ? 8 : 8,
                                },
                            ]}
                        />
                    ))}
                </View>

                <View>
                    <TouchableOpacity
                        onPress={onPressFunction}
                    >
                        <Image source={icons.forwardButtonOnboarding} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        // height: HEIGHT / 1.8,
        resizeMode: 'cover',
        // borderBottomLeftRadius: 54,
        // borderTopLeftRadius: 54,
    },
    dots: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
    },
    dot: {
        borderRadius: 10,
        margin: 5,
    },
    buttonText: {
        color: '#3511A3',
        fontSize: 20,
        fontWeight: '400',
    },
    subtitleText: {
        fontSize: 20,
        color: '#838383',
        paddingHorizontal: SIZES.padding,
        fontWeight: '500',
    },
    titleText: {
        fontSize: 30,
        color: '#484848',
        fontWeight: '400',
        paddingHorizontal: SIZES.padding,
        marginRight: 60,
    },
    subtitleTextContainer: { paddingTop: SIZES.padding2 },
    titleTextContainer: {
        marginBottom: 55,
        paddingTop: SIZES.padding2,
        borderTopRightRadius: 65,
        marginTop: 15,
    },
});

export default OnBoardingCarousel;
