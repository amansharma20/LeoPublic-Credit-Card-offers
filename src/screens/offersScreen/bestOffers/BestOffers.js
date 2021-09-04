/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { SIZES } from '../../../constants/theme';
import { Responsive } from '../../../utils/layouts/Layout';
import BestOffersFlatlist from '../../../components/flatlistsItems/BestOffersFlatlist';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function BestOffers() {

  const { loading, data } = useQuery(GQLQuery.GET_BEST_OFFERS);
  const BankCardOffers = data && data.BankCardOfferQuery && data.BankCardOfferQuery.GetBankCardOffers;

  const renderItem = ({ item }) => (
    <BestOffersFlatlist offer={item} key={item.Id} />
  );

  if (loading) {
    return (
      <View style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <View style={styles.skeletonStyle} />
            <View style={styles.skeletonStyle} />
          </View>
          <View style={styles.skeletonStyle} />
        </SkeletonPlaceholder>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <FlatList
            data={BankCardOffers}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: Responsive.height(180) }}
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
  },
  contentContainer: {
    paddingBottom: Responsive.height(20),
  },
  body: {
    // paddingVertical: SIZES.padding,
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
