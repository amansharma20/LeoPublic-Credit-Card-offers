/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../constants/theme';
import {icons, images} from '../../../constants';
import {Responsive} from '../../../utils/layouts/Layout';
import DATA from '../../../assets/dummyData/overview';
import MODALDATA from '../../../assets/dummyData/overviewModal';
import Overview from '../../../components/flatlistsItems/OverviewScreenFlatlist';
import MoreDetails from '../../../components/flatlistsItems/MoreDetailsItems';
import BackButtonPurple from '../../../assets/svgs/backButtonPurple.svg';
import LinearGradient from 'react-native-linear-gradient';

export default function OverviewScreen() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const renderItem = ({item}) => (
    <Overview title={item.title} subtitle={item.subtitle} />
  );
  const renderModalItem = ({item}) => (
    <MoreDetails title={item.title} subtitle={item.subtitle} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        {/* HEADER TITLE TAB  */}
        <LinearGradient style={styles.innerContainer} colors={['#EEE5FF', '#FFFFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Issuing Bank</Text>
            <Text style={styles.subText}>Axis Bank</Text>
          </View>
          <View>
            <Image source={images.axis} style={styles.imageSize} />
          </View>
          </LinearGradient>
      </View>
      {/* FLATLIST */}
      <View style={styles.flatlistContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <TouchableOpacity onPress={() => setShowModal(true)} activeOpacity={0.85}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>More Details</Text>
        </View>
      </TouchableOpacity>
      </View>
      {/* MORE DETAILS MODAL  */}
      {showModal && (
        <Modal
          showModal={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide">
          {/* <OverViewScreenModal /> */}
          <View style={styles.modalContainer}>
            {/* HEADER  */}
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <BackButtonPurple />
              </TouchableOpacity>
              <Text style={styles.modalHeaderText}>My Cards</Text>
              <View style={styles.rightIconContainer}>
                <Image source={icons.add} style={styles.iconSizeRight} />
              </View>
            </View>
            {/* FLATLIST  */}
            <FlatList
              data={MODALDATA}
              renderItem={renderModalItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.modalContentContainerStyle}
            />
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  body: {
    paddingTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#f0e9ff',
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
    elevation: 3,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#797E96',
    fontSize: 18,
    lineHeight: 24,
  },
  subText: {
    color: '#1c1b1b',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageSize: {
    width: Responsive.width(120),
    height: Responsive.width(80),
    resizeMode: 'contain',
  },
  flatlistContainer: {
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
  },
  contentContainerStyle: {
    paddingBottom: SIZES.padding2,
  },
  modalContentContainerStyle: {
    paddingBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#f1eef6',
    marginHorizontal: 90,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#4D2D8F',
    fontSize: 14,
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
    alignItems: 'center',
  },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  modalHeaderText: {fontSize: 24, fontWeight: '700', color: '#4D2D8F'},
  leftIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconContainer: {
    width: 44,
    height: 44,
    backgroundColor: '#dbd5e9',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
