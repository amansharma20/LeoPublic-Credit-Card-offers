/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { SIZES } from '../../constants';
import MODALDATA from '../../assets/dummyData/overviewModal';
import OffersDetailsModalFlatlist from '../../components/flatlistsItems/OffersDetailsModalFlatlist';
import { ScrollView } from 'react-native-gesture-handler';

export default function BottomTabOffersScreenModal() {

  const renderModalItemOffersDetails = ({ item }) => (
    <OffersDetailsModalFlatlist title={item.title} subtitle={item.subtitle} />
  );
  return (
    <View style={{ flex: 1, paddingTop: 8 }}>
      <FlatList
        data={MODALDATA}
        renderItem={renderModalItemOffersDetails}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.modalContentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    padding: SIZES.padding,
  },
});
