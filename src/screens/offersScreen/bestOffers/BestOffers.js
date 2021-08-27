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
import BESTOFFERSDATA from '../../../assets/dummyData/bestOffersData';

export default function BestOffers() {
  const renderItem = ({ item }) => (
    <BestOffersFlatlist title={item.title} subtitle={item.subtitle} image={item.image} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <FlatList
            data={BESTOFFERSDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={{paddingBottom: Responsive.height(180)}}
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
});
