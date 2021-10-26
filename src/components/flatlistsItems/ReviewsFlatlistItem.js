/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Modal, TextInput, TouchableOpacity } from 'react-native';
import { images, SIZES } from '../../constants';
import { Rating } from 'react-native-ratings';
import { format } from 'date-fns';
import jwt from 'jwt-decode'
import { useSelector } from 'react-redux';
import { GQLMutation } from '../../persistence/mutation/Mutation';
import { useMutation } from '@apollo/client';

const RATING_STAR = require('../../assets/icons/starRating.png');

export default function Reviews(props) {
    const review = props.review;


    const formatedDate = (offerdate) => {
        var date = new Date(offerdate)
        var formattedDate = format(date, 'do MMMM, yy');
        return formattedDate;
    };

    const [userToken, setUserToken] = useState();

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await Keychain.getGenericPassword();
                setUserToken(jwt(userToken.password));
            } catch (e) {
                // Restoring token failed
            }
        };
        bootstrapAsync();
    }, [userToken])

    const [showModal, setShowModal] = useState(false);
    const [customerCardReview, setCustomerCardReview] = useState(review.Review);

    const [writeReview, { data: reviewData, error: reviewError }] = useMutation(GQLMutation.EDIT_CARD_REVIEW);

    const editReview = () => {
        writeReview({
            variables: {
                Id: review.Id,
                Review: customerCardReview
            }
        });
        if (reviewData && reviewData.CardReviewMutation && reviewData.CardReviewMutation.EditBankCardReview == 'Edited') {
            setShowModal(false);
        }
        if (reviewError) {
            setShowModal(false);
        }
    };

    console.log(reviewData)
    console.log(reviewError)

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
                review.CustomerUser.Id == userToken.CustomerUserId ? <>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.editButton} onPress={() => setShowModal(true)}>
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

            {showModal && (
                <Modal
                    showModal={showModal}
                    onRequestClose={() => setShowModal(false)}
                    transparent={true}
                    statusBarTranslucent={true}
                    animationType="slide">
                    <View style={styles.modalBackground}>
                        {/* HEADER  */}
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalHeader}>Edit Review</Text>
                            <View style={styles.writeReviewContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    autoCapitalize
                                    multiline={true}
                                    onChangeText={val => setCustomerCardReview(val)}
                                />
                            </View>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        editReview()
                                    }}>
                                    <View style={styles.saveButtonContainer}>
                                        <Text style={styles.saveButtonText}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    // onPress={handleSubmit(onSubmit)}
                                    onPress={() => setShowModal(false)}>
                                    <View style={styles.closeButtonContainer}>
                                        <Text style={styles.closeButtonText}>Close</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}

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
    },

    modalBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    }, modalContainer: {
        backgroundColor: '#ffffff',
        height: '75%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        width: '100%',
        padding: SIZES.padding,
    },
    modalHeader: {
        fontSize: 22,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
    writeReviewContainer: {
        paddingVertical: SIZES.padding,
    },
    inputText: {
        backgroundColor: '#f4f5f7',
        borderRadius: 8,
        height: 200,
        color: '#3E3E3E',
        textAlignVertical: 'top',
        padding: 12,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium'
        }),
    },
    buttonsContainer: {
        marginTop: 40,
    },
    saveButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d2d8f',
        borderRadius: 10,
        height: 48,
        marginVertical: 15,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
    closeButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 48,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: '#4d2d8f',
    },
    closeButtonText: {
        color: '#4d2d8f',
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold'
        }),
    },
});

