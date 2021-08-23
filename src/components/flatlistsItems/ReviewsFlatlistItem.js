/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { images, SIZES } from '../../constants';
import { Rating } from 'react-native-ratings';

const RATING_STAR = require('../../assets/icons/starRating.png');

const Reviews = ({ name, review }) => (
    <View style={styles.container}>
        <View style={styles.body}>
            <View>
                <Image source={images.pfp} style={styles.imageSize} />
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.nameRatingContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                    <View style={styles.ratingsContainer}>
                        <Rating
                            type="custom"
                            ratingImage={RATING_STAR}
                            ratingColor="#f6cb61"
                            ratingCount={5}
                            imageSize={10}
                        // onFinishRating={this.ratingCompleted}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.dateText}>
                    25/04/2021
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.reviewTextContainer}>
            <Text style={styles.reviewText}>
                {review}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding,
        borderBottomWidth: 1,
        borderColor: '#f2f5f7',
    },
    body: {
        flexDirection: 'row',
        // alignItems: 'center',

    },
    imageSize: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        // alignItems: 'center',
    },
    nameText: {
        fontSize: 16,
        // fontFamily: 'Exo2Bold',
    },
    ratingsContainer: {
        width: '50%',
        paddingVertical: 2
    },
    nameRatingContainer: {
        paddingHorizontal: 6,
    },
    dateText: {
        fontSize: 12,
        color: '#797E96',
        // fontFamily: 'Exo2Medium',
    },
    reviewText: {
        color: '#797E96',
        fontSize: 14,
        // fontFamily: 'Exo2Regular',
    },
    reviewTextContainer: {
        marginLeft: 44,
        paddingVertical: 2,
    },
});

export default Reviews;
