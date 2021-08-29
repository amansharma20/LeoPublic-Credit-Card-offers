/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  LogBox
} from 'react-native';
import MyCardsScreenHeader from '../../components/headers/MyCardsScreenHeader';
import { Responsive } from '../../utils/layouts/Layout';
import { useQuery } from '@apollo/client';
import HomeSegmentNavigator from './../../navigation/HomeSegmentNavigator';
import CreditCardImagesFlatlist from '../../components/flatlistsItems/CreditCardImagesFlatlist';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';
import { GQLQuery } from '../../persistence/query/Query';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';



const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default function MyCards() {
  const dispatch = useDispatch();
  const { loading, data } = useQuery(GQLQuery.GET_USER_BANK_CARDS);
  const BankCards = data && data.BankCardQuery && data.BankCardQuery.GetCustomerUserBankCard;
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Warning: Each', 'Warning: Failed'])
  }, [])

  if (loading)
    return (
      <View style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>
          <View style={{ width: 289, height: 169, borderRadius: 32, marginTop: 60 }} />
          <View horizontal style={{ flexDirection: 'row', marginTop: 60, width: 250 }}>
            <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
            <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
            <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
            <View style={{ width: 60, height: 20, borderRadius: 0, marginHorizontal: 12 }} />
          </View>
          <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 90 }} />
          <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 20 }} />
          <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 20 }} />
        </SkeletonPlaceholder>
      </View>
    );

  const renderCustomerUserCards = (card) => (
    <CreditCardImagesFlatlist card={card} key={card.index} />
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false} horizontal={false}
        overScrollMode={'auto'} >
        <StatusBar
          hidden={false}
          backgroundColor={'#4d2d8f'}
          barStyle={'light-content'} />
        <View >
          <MyCardsScreenHeader />
        </View>
        <View style={styles.mainBody}>
          <TouchableOpacity style={styles.creditCardContainer}>
            <Carousel
              data={BankCards}
              renderItem={renderCustomerUserCards}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              currentIndex={(c) => { console.log(c); }}
              onSnapToItem={(index) => console.log(index + 1)}
              scrollInterpolator={scrollInterpolator}
              slideInterpolatedStyle={animatedStyles}
              useScrollView={true}
              inactiveSlideScale={0.9}
              inactiveSlideOpacity={0.95}
            />
          </TouchableOpacity>
          <View>
            <HomeSegmentNavigator selectedCard={BankCards && BankCards[selectedCardIndex]} />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  body: {
    paddingHorizontal: Responsive.width(12),
    paddingVertical: Responsive.height(8),
  },
  creditCardContainer: {
    marginTop: Responsive.height(-130),
  },
  mainBody: {
    backgroundColor: 'white',
    height: '100%',
    marginTop: Responsive.height(125),
    borderTopLeftRadius: Responsive.width(32),
    borderTopRightRadius: Responsive.width(32),
  },
  carouselContainer: {

  },
});
