/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import { FlatList } from 'react-native-gesture-handler';
import DATA from '../../../assets/dummyData/offers';
import Offers from '../../../components/flatlistsItems/OffersScreenFlatlist';
import { Responsive } from '../../../utils/layouts/Layout';

export default function AllOffers() {
  const navigation = useNavigation();
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
    // padding: SIZES.padding,
    // marginRight: SIZES.padding,
  },
  flatlistContainer: {
    // alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
});
