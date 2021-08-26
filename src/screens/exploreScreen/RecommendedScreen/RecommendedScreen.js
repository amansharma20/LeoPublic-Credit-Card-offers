/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
  Modal,
  ImageBackground,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SIZES from '../../../constants/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Responsive } from '../../../utils/layouts/Layout';
import RecommendedScreenFlatlist from '../../../components/flatlistsItems/RecommendedScreenFlatlist';
import CompareModalItemFlatlist from '../../../components/flatlistsItems/CompareModalItemFlatlist';
import compareModalData from '../../../assets/dummyData/compareModalData';
import BackButtonWhite from '../../../assets/svgs/backButtonWhite.svg';
import { images } from '../../../constants';
import AxisLogo from '../../../assets/svgs/axisLogo.svg';
import Stars from '../../../assets/svgs/stars.svg';
import Visa from '../../../assets/svgs/visasvg.svg';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import _ from "lodash";
import { ScrollView } from 'react-native-gesture-handler';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function RecommendedScreen(props) {
  const navigation = useNavigation();

  const [openAllCategories, setOpenAllCategories] = useState(false);
  const [allCategories, setAllCategories] = useState([
    { label: 'Lifestyle', value: 'Lifestyle' },
    { label: 'Fashion', value: 'Fashion' },
  ]);
  const [allCategoriesValue, setAllCategoriesValue] = useState(null);
  const [checkboxState, setCheckboxState] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const renderCompareModalItem = ({ item }) => (
    <CompareModalItemFlatlist
      title={item.title}
      card1={item.card1}
      card2={item.card2}
    />
  );

  const { loading, error, data } = useQuery(GQLQuery.GET_EXPLORE_RECOMMENDED_CARDS);
  const recommendedCard = data && data.ExploreQuery && data.ExploreQuery.GetRecommended;

  if (loading) {
    return Array.from({ length: 3 }).map((_, index) => (
      <View key={index} style={{ marginBottom: 12 }}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" marginTop={60}>
            <SkeletonPlaceholder.Item marginLeft={60} width={300} height={180} borderRadius={4} />
            <SkeletonPlaceholder.Item
              flex={1}
              justifyContent={'space-between'}
              marginLeft={12} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    ));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.buttonsContainer}>
          <View>
            <DropDownPicker
              open={openAllCategories}
              value={allCategoriesValue}
              items={allCategories}
              setOpen={setOpenAllCategories}
              setValue={setAllCategoriesValue}
              setItems={setAllCategories}
              placeholder="All"
              style={styles.categoriesContainer}
              placeholderStyle={styles.placeholderText}
              listMode="FLATLIST"
              dropDownContainerStyle={styles.dropDownContainerStyle}
              closeAfterSelecting={true}
              listItemLabelStyle={{
                fontFamily: Platform.select({
                  ios: 'Exo2-Medium',
                  android: 'Exo2Medium',
                }),
              }}
              selectedItemLabelStyle={{
                fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => setShowCompareModal(true)}>
              <View style={styles.compareButton}>
                <Text style={styles.compareText}>Compare</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {_.map(recommendedCard, (value, index) => {
            return (
              <RecommendedScreenFlatlist cards={value} key={index.toString()} />
            );
          })}
        </View>
        {/* COMPARE MODAL  */}
        {showCompareModal && (
          <Modal
            animationType="slide"
            // transparent={true}
            // statusBarTranslucent={true}
            showModal={showCompareModal}
            onRequestClose={() => setShowCompareModal(false)}>
            <View style={styles.compareModalContainer}>
              {/* HEADER  */}
              <View style={styles.headerContainer}>
                <View
                  style={styles.headerButtonsContainer}>
                  <TouchableOpacity onPress={() => setShowCompareModal(false)}>
                    <BackButtonWhite />
                  </TouchableOpacity>
                  <View style={styles.compareHeaderTextContainer}>
                    <Text style={styles.modalHeaderText}>Compare</Text>
                  </View>
                </View>
              </View>
              <View style={styles.modalBackgroundColor}>
                <View style={styles.comparedCardsContainer}>
                  <ImageBackground
                    source={images.compareCardOne}
                    style={styles.comparedCardImage}
                    imageStyle={styles.backgroundImageStyle}>
                    <View>
                      {/* CARD IMAGE  */}
                      {/* <Image source={images.axis} style={{width: 80, height: 25, resizeMode: 'contain',}} /> */}
                      <AxisLogo />
                      <Text style={styles.cardTypeText}>
                        Fly Premium Card
                      </Text>
                    </View>
                    <View style={styles.cardItemsBottomContainer}>
                      <Stars />
                      <Visa />
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    source={images.compareCardTwo}
                    style={styles.comparedCardImage}
                    imageStyle={styles.backgroundImageStyle}>
                    <View>
                      {/* CARD IMAGE  */}
                      {/* <Image source={images.axis} style={{width: 80, height: 25, resizeMode: 'contain',}} /> */}
                      <AxisLogo />
                      <Text style={styles.cardTypeText}>
                        Fly Premium Card
                      </Text>
                    </View>
                    <View style={styles.cardItemsBottomContainer}>
                      <Stars />
                      <Visa />
                    </View>
                  </ImageBackground>
                </View>
                {/* FLATLIST  */}
                <View style={styles.flatlistBackgroundColor}>
                  <FlatList
                    data={compareModalData}
                    renderItem={renderCompareModalItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.modalContentContainerStyle}
                  />
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
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(22),
  },
  categoriesContainer: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
    width: Responsive.width(115),
    height: Responsive.height(40),
  },
  placeholderText: {
    fontSize: SIZES.h3,
    color: '#4D2D8F',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  dropDownContainerStyle: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
  },
  compareButton: {
    borderRadius: 12,
    backgroundColor: '#4D2D8F',
    width: 101,
    height: Responsive.height(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  compareText: {
    color: '#ffffff', fontSize: 14,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#4d2d8f',
    height: Responsive.height(190),
    paddingTop: Platform.select({
      ios: 40,
      android: 0,
    }),
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  modalBackgroundColor: { backgroundColor: '#4d2d8f' },
  compareHeaderTextContainer: { marginLeft: '38%' },
  compareModalContainer: {
    flex: 1,
  },
  iconSizeLeft: { width: 34, height: 34 },
  iconSizeRight: { width: 28, height: 28 },
  modalHeaderText: {
    fontSize: 24,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    color: '#ffffff'
  },
  leftIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comparedCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 18,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  comparedCardImage: {
    width: Responsive.width(131),
    height: Responsive.height(172),
    marginTop: -90,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  backgroundImageStyle: {
    resizeMode: 'contain',
    borderRadius: 12,
  },
  cardTypeText: {
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    fontSize: 8, paddingVertical: 4, color: '#ffffff'
  },
  cardItemsBottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  flatlistBackgroundColor: { backgroundColor: '#fff' },
});
