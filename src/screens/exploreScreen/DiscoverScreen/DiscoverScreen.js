/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';
import { Responsive } from '../../../utils/layouts/Layout';
import SearchIcon from '../../../assets/svgs/search.svg';
import CommonSearchInput from '../../../components/CommonSearchInput';
import FilterIcon from '../../../assets/svgs/filterIcon.svg';
import CrossIcon from '../../../assets/svgs/crossIcon.svg';
import { SIZES } from '../../../constants';
import FilterCardsModalSegments from './FilterCardsModalSegments';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import RecommendedScreenFlatlist from '../../../components/flatlistsItems/RecommendedScreenFlatlist';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



export default function RecommendedScreen() {

  const [showModal, setShowModal] = useState(false);

  const { loading, data } = useQuery(GQLQuery.GET_EXPLORE_DISCOVER_CARDS);
  const DiscoverCards = data && data.ExploreQuery && data.ExploreQuery.GetDiscover;


  const selectedCardArray = [];
  const selectedCardCallback = (card) => {
    selectedCardArray.push(card);
    if (selectedCardArray.length > 2) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Sorry',
        text2: ' You can select only two cards at a time',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }


  if (loading) {
    return Array.from({ length: 3 }).map((_, index) => (
      <View key={index} style={{ marginBottom: 12, alignItems: 'center' }}>
        <SkeletonPlaceholder>
          <View style={{ width: 289, height: 169, borderRadius: 12, marginTop: 60 }} />
          <View style={{ width: 289, height: 169, borderRadius: 12, marginTop: 60 }} />
          <View style={{ width: 289, height: 169, borderRadius: 12, marginTop: 60 }} />
        </SkeletonPlaceholder>
      </View>
    ));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.buttonsContainer}>
          <CommonSearchInput
            placeholder={'Search Card'}
            placeholderTextColor={'#b9b9b9'}
            backgroundColor={'#f1f1f1'}
            borderRadius={4}
            alignItems={'center'}
            leftIcon={<SearchIcon />}
          />
          <TouchableOpacity
            onPress={() => {
              setShowModal(true)
            }}
            style={styles.filterButtonContainer}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: Responsive.height(150) }}>
          {_.map(DiscoverCards, (value, index) => {
            return (
              <RecommendedScreenFlatlist cards={value} key={index.toString()} callback={selectedCardCallback} />
            );
          })}
        </View>
        {showModal && (
          <Modal
            showModal={showModal}
            onRequestClose={() => setShowModal(false)}
            transparent={true}
            statusBarTranslucent={true}
            animationType="slide">
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                {/* HEADER  */}
                <View style={styles.iconContainer}>
                  <Text style={styles.modalHeaderText}>Filter Cards</Text>
                  <TouchableOpacity
                    onPress={() => setShowModal(false)}
                    style={styles.rightIconContainer}>
                    <CrossIcon />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalBody}>
                  <View style={{}}>
                    <FilterCardsModalSegments />
                  </View>
                </View>
                <View style={styles.bottomButtonsContainer}>
                  <TouchableOpacity style={styles.clearAllButtonContainer}>
                    <Text style={styles.clearAllText}>Clear All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowModal(false)} style={styles.applyButtonContainer}>
                    <Text style={styles.applyButtonText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    paddingHorizontal: 16,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: Responsive.height(22),
    paddingHorizontal: Responsive.width(20),
  },
  filterButtonContainer: {
    width: Responsive.width(40),
    height: Responsive.height(40),
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    height: '64%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 16,
    alignItems: 'center',
  },
  modalHeaderText: {
    fontSize: 20, color: '#060417',
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  modalBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dfe0e4',
    height: '75%',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  clearAllButtonContainer: {
    backgroundColor: '#ffffff',
    width: Responsive.width(160),
    height: Responsive.height(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearAllText: {
    color: '#4D2D8F', fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  applyButtonContainer: {
    backgroundColor: '#4D2D8F',
    width: Responsive.width(160),
    height: Responsive.height(46),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  applyButtonText: {
    color: '#ffffff', fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  rightIconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
