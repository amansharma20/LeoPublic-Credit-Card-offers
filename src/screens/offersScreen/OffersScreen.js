/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Responsive } from '../../utils/layouts/Layout';
// import { gql, useQuery } from '@apollo/client';
import CreditCardImagesFlatlist from '../../components/flatlistsItems/CreditCardImagesFlatlist';
import OffersSegmentNavigator from '../../navigation/OffersSegmentNavigator';
import OffersScreenHeader from '../../components/headers/OffersScreenHeader';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

export default function OffersScreen(props) {
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
            <OffersScreenHeader />
          </View>
          {/* MAIN BODY  */}
          <View style={styles.mainBody}>
            <View>
              <OffersSegmentNavigator />
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
