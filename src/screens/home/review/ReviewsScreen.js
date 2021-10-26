/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Platform,
} from 'react-native';
import { SIZES } from '../../../constants/theme';
import StarIcon from '../../../assets/svgs/star.svg';
import { Rating } from 'react-native-ratings';
import Reviews from '../../../components/flatlistsItems/ReviewsFlatlistItem';
import { useMutation, useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { GQLMutation } from '../../../persistence/mutation/Mutation';
import CommonLoading from '../../../components/CommonLoading';

export default function ReviewsScreen(props) {

  const cardData = props.cardData;

  const RATING_STAR = require('../../../assets/icons/starRating.png');
  const renderItem = ({ item }) => (
    <Reviews review={item} key={item.Id} />
  );
  const [showModal, setShowModal] = useState(false);
  const [showModalRating, setShowModalRating] = useState(false);


  const [customerCardReview, setCustomerCardReview] = useState('');
  const [writeReview, { data: reviewData, error: reviewError }] = useMutation(GQLMutation.ADD_CARD_REVIEW);


  const { loading, data, error } = useQuery(GQLQuery.GET_USER_BANK_CARD_REVIEW, {
    variables: {
      BankCardId: cardData.BankCard.Id,
    },
  });


  const ReviewList = data && data.BankCardReviewQuery && data.BankCardReviewQuery.GetBankCardReviewsByBankCardId;


  const createReview = () => {
    writeReview({
      variables: {
        BankCardId: cardData.BankCard.Id,
        Review: customerCardReview,
      },
    });
    if (reviewData && reviewData.CardReviewMutation && reviewData.CardReviewMutation.CreateCardReview == 'Created') {
      setShowModal(false);
    }
    if (reviewError) {
      setShowModal(false);
    }
  };


  if (loading) {
    return (
      <View style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>
          <View style={styles.skeletonStyle} />
          <View style={styles.skeletonStyle} />
          <View style={styles.skeletonStyle} />
          <View style={styles.skeletonStyle} />
          <View style={styles.skeletonStyle} />
        </SkeletonPlaceholder>
      </View>
    );
  }
  {

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          {/* AVERAGE REVIEW  */}
          <View style={styles.defaultReviewContainer}>
            <View style={styles.leftContainer}>
              <StarIcon />
              <View style={styles.ratingTextContainer}>
                <Text style={styles.ratingText}>{cardData.BankCard.Rating}</Text>
                <Text style={styles.reviewText}>{error ? 0 : ReviewList.length} Reviews</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <Rating
                type="custom"
                ratingImage={RATING_STAR}
                ratingColor="#f6cb61"
                count={4}
                ratingCount={5}
                imageSize={16}
              // onFinishRating={this.ratingCompleted}
              />
              {
                cardData.IsReviewGiven == true ? null :
                  <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    style={styles.writeReviewButtonContainer}>
                    <Text style={styles.writeReviewText}>Write a review</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
          {/* REVIEWS FLATLIST */}
          {
            error ? <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyStateText}>
                No reviews for this card yet
              </Text>
            </View> :
              <View style={styles.flatlistContainer}>
                <FlatList
                  data={ReviewList}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  contentContainerStyle={styles.contentContainerStyle}
                />
              </View>
          }
        </View>
        {/* WRITE A REVIEW MODAL  */}
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
                <Text style={styles.modalHeader}>Write Review</Text>
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
                    // onPress={() => {
                    //   createReview()
                    // }}
                    onPress={() => setShowModalRating(true) | setShowModal(false)}

                  >
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
        {showModalRating && (
          <Modal
            showModal={showModalRating}
            onRequestClose={() => setShowModalRating(false)}
            transparent={true}
            statusBarTranslucent={true}
            animationType="slide">
            <View style={styles.modalBackgroundRating}>
              {/* HEADER  */}
              <View style={styles.modalContainerRating}>
                <View style={styles.modalContentRating}>
                  <View>
                    <Text style={styles.modalHeaderRating}>Do you want to submit your rating?</Text>
                  </View>
                  <View>
                    <Rating
                      type="custom"
                      ratingImage={RATING_STAR}
                      ratingColor="#f6cb61"
                      count={4}
                      ratingCount={5}
                      imageSize={30}
                    // onFinishRating={this.ratingCompleted}
                    />
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => setShowModalRating(false)} style={styles.ratingSubmitButtonContainer}>
                      <Text style={styles.ratingSubmitButtonText}>
                        Submit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModalRating(false)} style={styles.ratingCancelButtonContainer}>
                      <Text style={styles.ratingCancelButtonText}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
            </View>
          </Modal>
        )}
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.select({
      ios: 20,
      android: 20,
    }),
    paddingBottom: 300,
  },
  body: {
    padding: SIZES.padding,
  },
  defaultReviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#f1f2f7',
    paddingBottom: SIZES.padding2,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTextContainer: {
    paddingLeft: 8,
  },
  ratingText: {
    color: '#1C1B1B',
    fontSize: 30,
    fontFamily: Platform.select({
      ios: 'Exo2-ExtraBold',
      android: 'Exo2ExtraBold',
    }),
  },
  ratingContainer: {
    alignItems: 'center',
  },
  reviewText: {
    color: '#8D92A3',
    fontSize: 11,
    fontFamily: Platform.select({
      ios: 'Exo2-ExtraBold',
      android: 'Exo2ExtraBold',
    }),
  },
  flatlistContainer: {},
  writeReviewButtonContainer: {
    paddingTop: 4,
  },
  writeReviewText: {
    fontSize: 12,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#4D2D8F',
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  modalContainer: {
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
      android: 'Exo2Bold',
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
      android: 'Exo2Medium',
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
      android: 'Exo2Bold',
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
      android: 'Exo2Bold',
    }),
  },
  emptyStateContainer: {
    flex: 1,
    height: 250,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-SemiBold',
      android: 'Exo2SemiBold',
    }),
  },
  skeletonStyle: {
    width: 300,
    height: 100,
    borderRadius: 8,
    marginTop: 30,
  },
  modalBackgroundRating: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainerRating: {
    backgroundColor: '#ffffff',
    width: '75%',
    height: '35%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: '55%',
    marginHorizontal: '12%',
  },
  modalContentRating: {
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  ratingSubmitButtonContainer: {
    backgroundColor: '#4D2D8F',
    width: 189,
    height: 32,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeaderRating: {
    fontSize: 15,
    color: '#8c99bf',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
    textAlign: 'center',
  },
  ratingSubmitButtonText: {
    color: '#ffffff',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  ratingCancelButtonContainer: {
    backgroundColor: '#ffffff',
    width: 189,
    height: 32,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#4D2D8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingCancelButtonText: {
    color: '#4D2D8F',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
