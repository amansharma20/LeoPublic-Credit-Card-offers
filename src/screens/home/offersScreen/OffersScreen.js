/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import { FlatList } from 'react-native-gesture-handler';
import DATA from '../../../assets/dummyData/offers';
import Offers from '../../../components/flatlistsItems/OffersScreenFlatlist';
import { Responsive } from '../../../utils/layouts/Layout';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


export default function OffersScreen(props) {
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GQLQuery.GET_BEST_OFFERS);
  const latestOffer = data && data.BankCardOfferQuery && data.BankCardOfferQuery.GetBankCardOffers;

  console.log(error)
  console.log(latestOffer)


  if (loading) 
  return  Array.from({length: 3}).map((_, index) => (
    <View key={index} style={{marginBottom: 12}}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" marginTop={60}>
          <SkeletonPlaceholder.Item marginLeft={60} width={300} height={180} borderRadius={4} />
          <SkeletonPlaceholder.Item
            flex={1}
            justifyContent={'space-between'}
            marginLeft={12}>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  ));


  const renderItem = ({ item }) => (
    <Offers title={item.title} subtitle={item.subtitle} image={item.image} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop:Platform.select({
      ios:20,
      android: 20,
    }),
  },
  contentContainer: {
    paddingBottom: Responsive.height(20),
  },
  body: {
    // padding: SIZES.padding,
    // marginRight: SIZES.padding,
  },
  flatlistContainer: {
    // alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
});
