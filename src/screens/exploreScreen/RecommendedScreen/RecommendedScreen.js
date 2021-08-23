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
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SIZES from '../../../constants/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Responsive } from '../../../utils/layouts/Layout';
import RecommendedScreenFlatlist from '../../../components/flatlistsItems/RecommendedScreenFlatlist';
import CREDITCARDDATA from '../../../assets/dummyData/creditCards';
import CompareModalItemFlatlist from '../../../components/flatlistsItems/CompareModalItemFlatlist';
import compareModalData from '../../../assets/dummyData/compareModalData';
import BackButtonWhite from '../../../assets/svgs/backButtonWhite.svg';
import { images } from '../../../constants';
import AxisLogo from '../../../assets/svgs/axisLogo.svg';
import Stars from '../../../assets/svgs/stars.svg';
import Visa from '../../../assets/svgs/visasvg.svg';

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

  const [checkboxState, setCheckboxState] = useState(false);

  const [showCompareModal, setShowCompareModal] = useState(false);

  const renderCompareModalItem = ({ item }) => (
    <CompareModalItemFlatlist
      title={item.title}
      card1={item.card1}
      card2={item.card2}
    />
  );

  return (
    <View style={styles.container}>
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
              // zIndex={10000}
              // zIndexInverse={1000}
              placeholder="All"
              style={styles.categoriesContainer}
              placeholderStyle={styles.placeholderText}
              listMode="FLATLIST"
              dropDownContainerStyle={styles.dropDownContainerStyle}
              closeAfterSelecting={true}
              listItemLabelStyle={{fontFamily: 'Exo2Medium'}}
              selectedItemLabelStyle={{fontFamily: 'Exo2Bold'}}
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
          <FlatList
            data={CREDITCARDDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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
    // fontFamily: 'Exo2Bold',
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
  compareText: { color: '#ffffff', fontSize: 14, 
  // fontFamily: 'Exo2Bold'
 },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#4d2d8f',
    height: Responsive.height(190),
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
  modalHeaderText: { fontSize: 24,
    //  fontFamily: 'Exo2Bold', 
     color: '#ffffff' },
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
    // fontFamily: 'Exo2Bold',
     fontSize: 8, paddingVertical: 4, color: '#ffffff' },
  cardItemsBottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  flatlistBackgroundColor: { backgroundColor: '#fff' },
});
