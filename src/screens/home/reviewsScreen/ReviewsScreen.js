/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import StarIcon from '../../../assets/svgs/star.svg';
import {Rating} from 'react-native-ratings';
import REVIEWDATA from '../../../assets/dummyData/reviews';
import Reviews from '../../../components/flatlistsItems/ReviewsFlatlistItem';

export default function ReviewsScreen() {
  const navigation = useNavigation();
  const RATING_STAR = require('../../../assets/icons/starRating.png');
  const renderItem = ({item}) => (
    <Reviews name={item.name} review={item.review} />
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* AVERAGE REVIEW  */}
        <View style={styles.defaultReviewContainer}>
          <View style={styles.leftContainer}>
            <StarIcon />
            <View style={styles.ratingTextContainer}>
              <Text style={styles.ratingText}>3.5</Text>
              <Text style={styles.reviewText}>70 Reviews</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              ratingImage={RATING_STAR}
              ratingColor="#f6cb61"
              ratingCount={5}
              imageSize={16}
              // onFinishRating={this.ratingCompleted}
            />
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={styles.writeReviewButtonContainer}>
              <Text style={styles.writeReviewText}>Write a review</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* REVIEWS FLATLIST */}
        <View style={styles.flatlistContainer}>
          <FlatList
            data={REVIEWDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>
      {/* WRITE A REVIEW MODAL  */}
      {showModal && (
        <Modal
          showModal={showModal}
          onRequestClose={() => setShowModal(false)}
          transparent={true}
          statusBarTranslucent ={true}
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
                />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  // onPress={handleSubmit(onSubmit)}
                  onPress={{}}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop:Platform.select({
      ios:20,
      android:20
    })
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  ratingContainer: {
    alignItems: 'center',
  },
  reviewText: {
    fontSize: 11,
    fontWeight: '700',
  },
  flatlistContainer: {},
  writeReviewButtonContainer: {
    paddingTop: 4,
  },
  writeReviewText: {
    fontSize: 12,
    fontWeight: '700',
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
    fontWeight: '700',
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
    fontWeight: '700',
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
    fontWeight: '700',
  },
});
