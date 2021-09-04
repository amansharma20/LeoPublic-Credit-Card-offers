/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { images, SIZES } from '../../constants';
import { Rating } from 'react-native-ratings';
import { format } from 'date-fns';
import jwt from 'jwt-decode'
import { useSelector } from 'react-redux';

const RATING_STAR = require('../../assets/icons/starRating.png');

export default function Reviews(props) {
    const review = props.review;

    const formatedDate = (offerdate) => {
        var date = new Date(offerdate)
        var formattedDate = format(date, 'do MMMM, yy');
        return formattedDate;
    };

    const token = useSelector(state => state.SessionReducer.data.user.user);
    const user = jwt(token);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Image source={images.pfp} style={styles.imageSize} />
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.nameRatingContainer}>
                        <Text style={styles.nameText}>
                            {review.CustomerUser.FirstName} {review.CustomerUser.LastName}
                        </Text>
                        <View style={styles.ratingsContainer}>
                            <Rating
                                type="custom"
                                ratingImage={RATING_STAR}
                                ratingColor="#f6cb61"
                                ratingCount={review.Rating}
                                imageSize={10}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.dateText}>
                            {formatedDate(review.UpdatedDateTimeUtc)}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewText}>
                    {review.Review}
                </Text>
            </View>
            {
                review.CustomerUser.Id == user.CustomerUserId ? <>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.editButton}>
                            EDIT
                        </Text>
                    </View>
                </> :
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.reportButton}>
                                Report
                            </Text>
                        </View>
                    </>
            }

        </View>
    )
};

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
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
    ratingsContainer: {
        width: '50%',
        paddingHorizontal: 18,
        paddingVertical: 4,
    },
    nameRatingContainer: {
        paddingHorizontal: 6,
    },
    dateText: {
        fontSize: 12,
        color: '#797E96',
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium'
        }),
    },
    reviewText: {
        color: '#797E96',
        fontSize: 14,
        fontFamily: Platform.select({
            ios: 'Exo2-Regular',
            android: 'Exo2Regular'
        }),
    },
    reviewTextContainer: {
        marginLeft: 44,
        paddingVertical: 2,
    },
    editButton: {
        color: '#4D2D8F',
        fontSize: 15,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
    reportButton: {
        color: '#DB1D1D',
        fontSize: 15,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    }
});

