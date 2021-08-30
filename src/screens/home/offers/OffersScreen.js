/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { SIZES } from '../../../constants/theme';
import { FlatList } from 'react-native-gesture-handler';
import DATA from '../../../assets/dummyData/offers';
import Offers from '../../../components/flatlistsItems/OffersScreenFlatlist';
import { Responsive } from '../../../utils/layouts/Layout';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


export default function OffersScreen(props) {
  const Id = props.cardData.BankCard.Id;
  const { loading, error, data } = useQuery(GQLQuery.GET_BANK_CARD_OFFERS_BY_ID, {
    variables: {
      CardId: Id,
    },
  });

  const BankCardOfferData = data && data.BankCardOfferQuery && data.BankCardOfferQuery.GetBankCardOfferById;

  console.log('Offer Data')
  console.log(data && data.BankCardOfferQuery && data.BankCardOfferQuery.GetBankCardOfferById)
  console.log('Offer Data')


  if (loading)
    return (
      <View style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>
          <View style={styles.skeletonStyle} />
          <View style={styles.skeletonStyle} />
          <View style={styles.skeletonStyle} />
        </SkeletonPlaceholder>
      </View>
    );

  console.log(error)

  const renderItem = ({ item }) => (
    <Offers offer = {item} />
  );

  return (
    <View style={styles.container}>
       <View style={styles.flatlistContainer}>
          <FlatList
            data={BankCardOfferData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.select({
      ios: 20,
      android: 20,
    }),
  },
  contentContainer: {
    paddingBottom: Responsive.height(400),
    // flex: 2,
  },
  skeletonStyle: {
    width: 300,
    height: 100,
    borderRadius: 8,
    marginTop: 30
  },
  flatlistContainer: {
    paddingHorizontal: SIZES.padding,
  },
});
