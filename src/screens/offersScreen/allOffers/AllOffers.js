/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { SIZES } from '../../../constants/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Responsive } from '../../../utils/layouts/Layout';
import BestOffersFlatlist from '../../../components/flatlistsItems/BestOffersFlatlist';
import { GQLQuery } from '../../../persistence/query/Query';
import { useQuery } from '@apollo/client';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function AllOffers() {


  const { loading, data } = useQuery(GQLQuery.GET_ALL_CARD_OFFERS);

  const AllOffers = data && data.BankCardOfferQuery && data.BankCardOfferQuery.GetBankCardOffers;

  if (loading)
    return (
      <View style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={styles.skeletonStyle} />
        </SkeletonPlaceholder>
      </View>
    );


  const renderItem = ({ item }) => (
    <BestOffersFlatlist offer={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={AllOffers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: Responsive.height(180) }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    // paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: Responsive.height(20),
  },
  body: {
    paddingHorizontal: SIZES.padding2,
  },
  skeletonStyle: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginTop: 30,
    marginHorizontal: 50,
  },
});
