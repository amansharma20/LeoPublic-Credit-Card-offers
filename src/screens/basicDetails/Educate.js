/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import CommonHeaderWithBackButton from '../../components/headers/CommonHeaderWithBackButton';
import { images } from '../../constants';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Educate() {
  const navigation = useNavigation();
  const [openBankName, setOpenBankName] = useState(false);
  const [bankValue, setBankValue] = useState(null);
  const [bankName, setBankName] = useState([
    {label: 'Title text goes here', value: 'Title text goes here'},
  ]);

  return (
    <View style={styles.container}>
      <CommonHeaderWithBackButton children="Educate" />
      <View style={styles.body}>
        <View style={{borderColor: '#F1F2F7', borderBottomWidth: 1}}>
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
            setItems={setBankName}
            zIndex={20000}
            zIndexInverse={1000}
            placeholder="Title text goes here"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View style={{borderColor: '#F1F2F7', borderBottomWidth: 1}}>
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
            setItems={setBankName}
            zIndex={10000}
            zIndexInverse={1000}
            placeholder="Title text goes here"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View style={{borderColor: '#F1F2F7', borderBottomWidth: 1}}>
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
            setItems={setBankName}
            zIndex={10000}
            zIndexInverse={1000}
            placeholder="Title text goes here"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View style={{borderColor: '#F1F2F7', borderBottomWidth: 1}}>
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
            setItems={setBankName}
            zIndex={10000}
            zIndexInverse={1000}
            placeholder="Title text goes here"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View style={{borderColor: '#F1F2F7', borderBottomWidth: 1}}>
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
            setItems={setBankName}
            zIndex={10000}
            zIndexInverse={1000}
            placeholder="Title text goes here"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View style={{borderColor: '#F1F2F7', borderBottomWidth: 1}}>
          <DropDownPicker
            open={openBankName}
            value={bankValue}
            items={bankName}
            setOpen={setOpenBankName}
            setValue={setBankValue}
            setItems={setBankName}
            zIndex={10000}
            zIndexInverse={1000}
            placeholder="Title text goes here"
            style={styles.bankNamePickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  body: { backgroundColor: '#ffffff', borderTopLeftRadius: 32, borderTopRightRadius: 32, flex: 1, padding: SIZES.padding },
  bankNamePickerContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    marginTop: 10,
  },
  placeholderText: {
      fontSize: 16,
      fontFamily: Platform.select({
        ios:'Exo2-Bold',
        android:'Exo2Bold',
      }),
  },
  dropDownContainerStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    flex: 1,
  },
});
