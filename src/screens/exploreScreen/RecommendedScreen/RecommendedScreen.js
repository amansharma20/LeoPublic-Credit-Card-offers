/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Animated,
} from 'react-native';
import SIZES from '../../../constants/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Responsive } from '../../../utils/layouts/Layout';
import RecommendedScreenFlatlist from '../../../components/flatlistsItems/RecommendedScreenFlatlist';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/core';


export default function RecommendedScreen() {

  const navigation = useNavigation();

  const [openAllCategories, setOpenAllCategories] = useState(false);
  const [allCategoriesValue, setAllCategoriesValue] = useState(null);

  const { loading, data } = useQuery(GQLQuery.GET_EXPLORE_RECOMMENDED_CARDS);
  const RecommendedCards = data && data.ExploreQuery && data.ExploreQuery.GetRecommended;

  const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true });

  const [allCategories, setAllCategories] = useState([
    { label: 'Lifestyle', value: 'Lifestyle' },
    { label: 'Fashion', value: 'Fashion' },
  ]);


  const selectedCardArray = [];
  const selectedCardCallback = (card) => {

    if (selectedCardArray.length > 2) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Sorry',
        text2: ' You can select only two cards at a time',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } else {
      if (selectedCardArray.length == 0) {
        selectedCardArray.push(card);
      } else {
        selectedCardArray.map((item, index) => {
          if (item.Id == card.Id) {
            selectedCardArray.splice(index, 1);
          } else {
            selectedCardArray.push(card);
          }
        })
      }
    }
  }

  const navigateToCompareCards = () => {
    navigation.navigate('CompareCardsScreen', {
      selectedCardArray: selectedCardArray,
      cardCompareData: [
        {
          id: '0',
          title: 'Card Level',
          card1: selectedCardArray[0].CardLevel,
          card2:  selectedCardArray[1].CardLevel
        },
        {
          id: '1',
          title: 'Credit Limit Range',
          card1: selectedCardArray[0].CreditLimitRange,
          card2:  selectedCardArray[1].CreditLimitRange
        },
        {
          id: '2',
          title: 'Interest Rate',
          card1: selectedCardArray[0].InterestRate,
          card2:  selectedCardArray[1].InterestRate
        },
        {
          id: '3',
          title: 'Joining Fees',
          card1: selectedCardArray[0].JoiningFees,
          card2:  selectedCardArray[1].JoiningFees
        },
        {
          id: '4',
          title: 'Annual Fees',
          card1: selectedCardArray[0].AnnualFees,
          card2:  selectedCardArray[1].AnnualFees
        },
        {
          id: '5',
          title: 'Eligibility Income Range',
          card1: selectedCardArray[0].EligibilityIncomeRange,
          card2:  selectedCardArray[1].EligibilityIncomeRange
        },
        {
          id: '6',
          title: 'Card Focus Segment',
          card1: selectedCardArray[0].CardFocusSegment,
          card2:  selectedCardArray[1].CardFocusSegment
        },
        {
          id: '7',
          title: 'Best Suited For',
          card1: selectedCardArray[0].BestSuitedFor,
          card2:  selectedCardArray[1].BestSuitedFor
        },
      ],
     
    });
  }


  if (loading) {
    return Array.from({ length: 3 }).map((_, index) => (
      <View key={index} style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>
          <View style={{ width: 289, height: 169, borderRadius: 12, marginTop: 60 }} />
          <View style={{ width: 289, height: 169, borderRadius: 12, marginTop: 60 }} />
          <View style={{ width: 289, height: 169, borderRadius: 12, marginTop: 60 }} />
        </SkeletonPlaceholder>
      </View>
    ));
  }

  return (
    <AnimatedScrollView style={styles.container}
      scrollEventThrottle={16}
      {...{ onScroll }}
    >
      <View style={styles.body}>
        <View style={styles.buttonsContainer}>
          <View>
            <DropDownPicker
              open={openAllCategories}
              value={allCategoriesValue}
              items={allCategories}
              setOpen={setOpenAllCategories}
              setValue={setAllCategoriesValue}
              setItems={setAllCategories}
              placeholder="All"
              style={styles.categoriesContainer}
              placeholderStyle={styles.placeholderText}
              listMode="FLATLIST"
              dropDownContainerStyle={styles.dropDownContainerStyle}
              closeAfterSelecting={true}
              listItemLabelStyle={{
                fontFamily: Platform.select({
                  ios: 'Exo2-Medium',
                  android: 'Exo2Medium',
                }),
              }}
              selectedItemLabelStyle={{
                fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => {
              if (selectedCardArray.length == 2) {
                navigateToCompareCards()
              } else {
                Toast.show({
                  type: 'error',
                  position: 'top',
                  text1: 'Sorry',
                  text2: 'Please Select atleast two cards to compare.',
                  visibilityTime: 4000,
                  autoHide: true,
                  topOffset: 30,
                  bottomOffset: 40,
                });
              }

              selectedCardArray.map(item => {
                console.log(item.CardName)
              })
            }}>
              <View style={styles.compareButton}>
                <Text style={styles.compareText}>Compare</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingBottom: Responsive.height(150) }}>
          {_.map(RecommendedCards, (value, index) => {
            return (
              <RecommendedScreenFlatlist cards={value} key={index.toString()} y={y} callback={selectedCardCallback} />
            );
          })}
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
  body: {
    paddingHorizontal: 16,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(22),
  },
  categoriesContainer: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
    width: Responsive.width(115),
    height: Responsive.height(40),
  },
  placeholderText: {
    fontSize: SIZES.h3,
    color: '#4D2D8F',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  dropDownContainerStyle: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
  },
  compareButton: {
    borderRadius: 12,
    backgroundColor: '#4D2D8F',
    width: 101,
    height: Responsive.height(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  compareText: {
    color: '#ffffff', fontSize: 14,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
