/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants';
import MenuIcon from '../../assets/svgs/menuIcon.svg';
import AddIcon from '../../assets/svgs/addIcon.svg';
import AddCardScreen from '../../screens/addCard/AddCardScreen';

export default function MyCardsScreenHeader (props) {
  
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.leftIconContainer}>
        <MenuIcon />
      </TouchableOpacity>
      <Text style={styles.headerText}>My Cards</Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate('AddCardScreen')}
        onPress={() => setShowModal(true)}
      >
        <View style={styles.rightIconContainer}>
          <AddIcon />
        </View>
      </TouchableOpacity>
      {showModal && (
        <Modal
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}
          showModal={showModal}
          onRequestClose={() => setShowModal(false)}>
          <View style={styles.modalBackground}>
            {/* HEADER  */}
            <View style={styles.modalContainer}>
              <AddCardScreen />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d2d8f',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: SIZES.padding2,
    alignItems: 'center',
    marginTop: Platform.select({
      ios: 30,
      android: 0,
    }),
  },
  iconSizeLeft: { width: 34, height: 34 },
  iconSizeRight: { width: 28, height: 28 },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    }),
  },
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
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    height: '85%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: '100%',
    padding: SIZES.padding2,
  },
});
