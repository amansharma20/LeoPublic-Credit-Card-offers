/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  LogBox,
  Platform,
} from 'react-native';
import MyCardsScreenHeader from '../../components/headers/MyCardsScreenHeader';
import { Responsive } from '../../utils/layouts/Layout';
import { useMutation, useQuery } from '@apollo/client';
import HomeSegmentNavigator from '../../navigation/others/HomeSegmentNavigator';
import CreditCardImagesFlatlist from '../../components/flatlistsItems/CreditCardImagesFlatlist';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';
import { GQLQuery } from '../../persistence/query/Query';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Animated from 'react-native-reanimated';
import EmptyStateScreen from './EmptyStateScreen';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { ApolloConsumer } from '@apollo/client';
import { GQLMutation } from '../../persistence/mutation/Mutation';



const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default function MyCards() {
  useEffect(() => {
    Platform.OS === 'ios' ? 200 : SplashScreen.hide();
  });
  const { loading, data, error, refetch } = useQuery(GQLQuery.GET_USER_BANK_CARDS);
  const [deleteCard, { data: deletedCardData, error: r, loading: deleteLoading }] = useMutation(GQLMutation.DELETE_USER_CARD);

  const BankCards = data && data.BankCardQuery && data.BankCardQuery.GetCustomerUserBankCard;
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);


  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Warning: Each', 'Warning: Failed'])
  }, [BankCards])



  const cardIndexChanged = (cardId) => {
    setSelectedCardIndex(cardId)
  }

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




  selectedCard = (id) => {
    deleteCard({ variables: { Id: id } });
    if (deletedCardData && deletedCardData.DeleteCustomerUserBankCardMutation && deletedCardData.DeleteCustomerUserBankCardMutation.DeleteCustomerUserBankCard == 'Deleted') {
      refetch();
    }
  }

  console.log(deletedCardData)
  console.log(data)

  if (deletedCardData){
    console.log('ss')
  }

  const renderCustomerUserCards = (card) => (
    <CreditCardImagesFlatlist card={card} key={card.index} selectedCard={selectedCard} />
  );




  if (!deleteLoading) {
    console.log("HUA")
    refetch()
  }




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
          <MyCardsScreenHeader refetch={refetch} />
        </View>
        <View style={styles.mainBody}>
          <TouchableOpacity style={styles.creditCardContainer}>
            <Carousel
              data={BankCards}
              renderItem={renderCustomerUserCards}
              keyExtractor={(_item, index) => index.toString()}
              horizontal={true}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              onSnapToItem={(index) => {
                cardIndexChanged(index)
              }}
              scrollInterpolator={scrollInterpolator}
              slideInterpolatedStyle={animatedStyles}
              useScrollView={true}
              inactiveSlideScale={0.9}
              inactiveSlideOpacity={0.95}
            />
          </TouchableOpacity>
          <View>
            {
              error == undefined ?
                <HomeSegmentNavigator selectedCard={BankCards && BankCards[selectedCardIndex]} />
                :
                <ScrollView>
                  <EmptyStateScreen />
                </ScrollView>
            }
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
