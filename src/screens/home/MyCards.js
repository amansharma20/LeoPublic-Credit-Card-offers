/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  LogBox} from 'react-native';
import MyCardsScreenHeader from '../../components/headers/MyCardsScreenHeader';
import { Responsive } from '../../utils/layouts/Layout';
import { useQuery } from '@apollo/client';
import HomeSegmentNavigator from './../../navigation/HomeSegmentNavigator';
import CreditCardImagesFlatlist from '../../components/flatlistsItems/CreditCardImagesFlatlist';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';
import { GQLQuery } from '../../persistence/query/Query';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default function MyCards(props) {

  const { loading, error, data } = useQuery(GQLQuery.GET_USER_BANK_CARDS);
  const BankCards = data && data.BankCardQuery && data.BankCardQuery.GetCustomerUserBankCard;
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Warning: Each', 'Warning: Failed'])
  }, [])

  if (loading) 
  return  Array.from({length: 3}).map((_, index) => (
    <View key={index} style={{marginBottom: 12}}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item width={300} height={300} borderRadius={4} />
          <SkeletonPlaceholder.Item
            flex={1}
            justifyContent={'space-between'}
            marginLeft={12}>
            <SkeletonPlaceholder.Item
              width="50%"
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              width="30%"
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              width="80%"
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  ));

  const renderCustomerUserCards = (card) => (
    <CreditCardImagesFlatlist card={card} key={card.index} />
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <StatusBar
          hidden={false}
          backgroundColor={'#4d2d8f'}
          barStyle={'light-content'}
        />
        <View>
          <View>
            <MyCardsScreenHeader />
          </View>
          {/* MAIN BODY  */}
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
        </View>
      </ScrollView>
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
