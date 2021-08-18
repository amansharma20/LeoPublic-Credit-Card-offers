/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Responsive } from '../../../utils/layouts/Layout';
import RecommendedScreenFlatlist from '../../../components/flatlistsItems/RecommendedScreenFlatlist';
import CREDITCARDDATA from '../../../assets/dummyData/creditCards';
import SearchIcon from '../../../assets/svgs/search.svg';
import CommonSearchInput from '../../../components/CommonSearchInput';
import FilterIcon from '../../../assets/svgs/filterIcon.svg';
import CrossIcon from '../../../assets/svgs/crossIcon.svg';
import { SIZES } from '../../../constants';
import FilterCardsModalSegments from './FilterCardsModalSegments';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function RecommendedScreen() {
  const navigation = useNavigation();
  //   const renderItem = ({ item }) => (
  //     <Offers title={item.title} subtitle={item.subtitle} image={item.image} />
  //   );
  const [openAllCategories, setOpenAllCategories] = useState(false);
  const [allCategories, setAllCategories] = useState([
    { label: 'Lifestyle', value: 'Lifestyle' },
    { label: 'Fashion', value: 'Fashion' },
  ]);
  const [allCategoriesValue, setAllCategoriesValue] = useState(null);

  const renderItem = ({ item }) => (
    <RecommendedScreenFlatlist image={item.image} />
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.buttonsContainer}>
          <CommonSearchInput
            placeholder={'Search Card'}
            placeholderTextColor={'#b9b9b9'}
            backgroundColor={'#f1f1f1'}
            borderRadius={4}
            alignItems={'center'}
            leftIcon={<SearchIcon />}
          // onFocus={() => {
          //   setRecentSearchFlag(false);
          // }}
          // onBlur={async () => {
          //   if (keyword.length == 0) {
          //     setRecentSearchFlag(true);
          //   }
          //   await onSearch(keyword);
          // }}
          // onRightIconClick={async () => {
          //   setKeyword('');
          //   await onSearch('');
          //   setRecentSearchFlag(true);
          // }}
          // onChangeText={async value => {
          //   setKeyword(value);
          //   await CommonLoading.show()
          //   await onSearch(value);
          // }}
          // value={keyword}
          />
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles.filterButtonContainer}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={CREDITCARDDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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
    </View>
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
  modalHeaderText: { fontSize: 20, color: '#060417' },
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
  clearAllText: { color: '#4D2D8F', fontSize: 16, fontWeight: '700' },
  applyButtonContainer: {
    backgroundColor: '#4D2D8F',
    width: Responsive.width(160),
    height: Responsive.height(46),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  applyButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  rightIconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
