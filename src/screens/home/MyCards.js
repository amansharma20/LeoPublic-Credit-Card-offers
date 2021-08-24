/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MyCardsScreenHeader from '../../components/headers/MyCardsScreenHeader';
import { Responsive } from '../../utils/layouts/Layout';
import { useQuery } from '@apollo/client';
import HomeSegmentNavigator from './../../navigation/HomeSegmentNavigator';
import CREDITCARDDATA from '../../assets/dummyData/creditCards';
import CreditCardImagesFlatlist from '../../components/flatlistsItems/CreditCardImagesFlatlist';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';
import { GQLQuery } from '../../persistence/query/Query';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default function MyCards(props) {


  const { loading, error, data } = useQuery(GQLQuery.GET_USER_BANK_CARDS);

  useEffect(() => {
    console.log(data);
    console.log(error);

  });

  const renderCustomerUserCards = (card) => (
    <CreditCardImagesFlatlist card={card} key={card.index}/>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
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
                data={CREDITCARDDATA}
                renderItem={renderCustomerUserCards}
                keyExtractor={item => item.id}
                horizontal={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                currentIndex={(c) => { console.log(c); }}
                onSnapToItem={(index) => console.log(index)}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}
                inactiveSlideScale={0.9}
                inactiveSlideOpacity={0.95}

              />
            </TouchableOpacity>
            <View>
              <HomeSegmentNavigator />
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
    marginTop: Responsive.height(-165),
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
