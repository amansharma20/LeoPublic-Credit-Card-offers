/* eslint-disable prettier/prettier */
import React from 'react';
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
// import { gql, useQuery } from '@apollo/client';
import HomeSegmentNavigator from './../../navigation/HomeSegmentNavigator';
import CREDITCARDDATA from '../../assets/dummyData/creditCards';
import CreditCardImagesFlatlist from '../../components/flatlistsItems/CreditCardImagesFlatlist';
import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default function MyCards(props) {
  //const { token } = props.route.params

  //     const GET_BANKS = gql`
  //     query{
  //         BankQuery{
  //             GetBanks{
  //                 Name
  //             }
  //         }
  //     }
  // `
  //     const { data } = useQuery(GET_BANKS)

  //     const fetchQuery = () => {
  //         console.log(data.BankQuery.GetBanks.map(bank=>{
  //             console.log(bank.Name);
  //         }));
  //     };
  const renderItem = ({ item }) => (
    <CreditCardImagesFlatlist image={item.image} />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          hidden={false}
          backgroundColor={'#4d2d8f'}
          barStyle={'light-content'}
        />
        <View>
          {/* HEADER  */}
          <View>
            <MyCardsScreenHeader />
          </View>
          {/* MAIN BODY  */}
          <View style={styles.mainBody}>
            <TouchableOpacity style={styles.creditCardContainer}>
              <Carousel
                data={CREDITCARDDATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                // onSnapToItem={(index) => this.setState({ index })}
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
