/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  ScrollView,
} from 'react-native';
import MyCardsScreenHeader from '../../components/headers/MyCardsScreenHeader';
import {SIZES, images} from '../../constants';
import {Responsive} from '../../utils/layouts/Layout';
// import { gql, useQuery } from '@apollo/client';
import HomeSegmentNavigator from './../../navigation/HomeSegmentNavigator';
import MenuIcon from '../../assets/svgs/menuIcon.svg';

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
            <View style={styles.creditCardContainer}>
              <Image
                source={images.creditCardBackground}
                style={styles.creditCardImage}
              />
            </View>
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
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  creditCardContainer: {
    marginVertical: Responsive.height(20),
    alignItems: 'center',
    padding: SIZES.padding,
  },
  creditCardImage: {
    width: '95%',
    marginTop: -150,
    padding: SIZES.padding,
  },
  mainBody: {
    backgroundColor: 'white',
    height: '100%',
    marginTop: 125,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
