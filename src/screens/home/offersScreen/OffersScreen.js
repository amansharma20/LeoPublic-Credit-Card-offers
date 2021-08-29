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
  const Id = props.cardData.Id;
  console.log(Id)
  const { loading, error, data } = useQuery(GQLQuery.GET_BANK_CARD_OFFERS_BY_ID, {
    variables: {
      CardId: Id,
    },
  });

  console.log(data)

  if (loading)
  return (
    <View style={{ marginBottom: 12, alignItems: 'center' }}>
      <SkeletonPlaceholder>
        <View style={{ width: 289, height: 169, borderRadius: 32, marginTop: 60 }} />
        <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 90 }} />
        <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 20 }} />
        <View style={{ width: 289, height: 100, borderRadius: 12, marginTop: 20 }} />
      </SkeletonPlaceholder>
    </View>
  );

  console.log(error)

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
    marginTop: Platform.select({
      ios: 20,
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
