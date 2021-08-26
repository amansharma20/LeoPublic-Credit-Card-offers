/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, FlatList, Platform } from 'react-native';
import { SIZES } from '../../constants';
import MODALDATA from '../../assets/dummyData/overviewModal';
import OffersDetailsModalFlatlist from '../../components/flatlistsItems/OffersDetailsModalFlatlist';
import { ScrollView } from 'react-native-gesture-handler';

export default function BottomTabOffersScreenModal() {

  const renderModalItemOffersDetails = ({ item }) => (
    <OffersDetailsModalFlatlist title={item.title} subtitle={item.subtitle} />
  );
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={MODALDATA}
        renderItem={renderModalItemOffersDetails}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.modalContentContainerStyle}
      /> */}
      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Offer Title</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>Apple</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Offer Description</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>1000 off on apple watch and accessories</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Expiry Date</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>21/6/2021</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Eligibility</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>Lorem ipsum dolor sit ame</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Platform</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>Lorem ipsum dolor sit ame</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Terms & Conditions</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>Lorem ipsum dolor sit ame</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Offer Code (if applicable)</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>Lorem ipsum dolor sit ame</Text>
      </View>

      <View style={styles.textContainerMain}>
        <Text style={styles.titleText}>Link to Offer Details</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>Lorem ipsum dolor sit ame</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: SIZES.padding2,
    width: '100%',
    paddingBottom: 50,
  },
  body: {
    paddingHorizontal: SIZES.padding,
  },
  textContainer: {
    paddingHorizontal: 4,
  },
  textContainerMain: {
    marginTop: 24,
  },
  titleText: {
    fontSize: 12,
    color: '#797E96',
    lineHeight: 20,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  subtitleText: {
    fontSize: SIZES.h4,
    color: '#172B4D',
    marginTop: 2,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
});
