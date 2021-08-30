/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BackButtonBlack from '../../assets/svgs/backButtonBlack.svg';
import { format } from "date-fns";

export default function BasicDetailsInput() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [openEmploymentType, setOpenEmploymentType] = useState(false);
  const [employmentValue, setEmploymentValue] = useState(null);
  const [genderValue, setGenderValue] = useState(null);
  const [employmentType, setEmploymentType] = useState([
    { label: 'Employed', value: 'employed' },
    { label: 'Unemployed', value: 'unemployed' },
  ]);
  const [gender, setGender] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]);
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const schema = yup.object().shape({
    pincode: yup.number().required('Pincode' + ' ' + 'is required'),
  });
  
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formatedDate = (date) =>{
   var formattedDate = format(date, "MMMM do, yyyy");
    console.log(formattedDate);
    return formattedDate;
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity>
          <View style={styles.header}>
            <BackButtonBlack />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hello, Navneet</Text>
          <Text style={styles.subTitleText}>
            To provide you the best experience,{'\n'}we need to know a few
            details about you.{'\n'}It would help us serve you better.
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.dobContainer}>
              <Text style={styles.dobText}>{formatedDate(date)}</Text>
            </View>
          </TouchableOpacity>

          {showModal && (
            <Modal
              animationType="fade"
              transparent={true}
              showModal={showModal}
              backgroundColor='black'
              onRequestClose={() => setShowModal(false)}>
              <DatePicker
                date={date}
                onDateChange={setDate}
                mode="date"
                style={styles.datePicker}
              />
              <View style={styles.dateSubmitContainer}>
                <TouchableOpacity
                  // onPress={() => setDate(new Date())}
                  onPress={() => setShowModal(false)}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
          <DropDownPicker
            open={openEmploymentType}
            value={employmentValue}
            items={employmentType}
            setOpen={setOpenEmploymentType}
            setValue={setEmploymentValue}
            setItems={setEmploymentType}
            zIndex={6000}
            zIndexInverse={1000}
            placeholder="Employment Type"
            style={styles.pickerContainer}
            placeholderStyle={styles.placeholderText}
            listMode="FLATLIST"
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
          <View style={styles.annualSalaryContainer}>
            <Text style={styles.annualSalaryText}>Annual Salary Range</Text>
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label={'Pincode'}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  error={errors.pincode}
                  style={styles.pincodeInput}
                  placeholderTextColor={'#B4B4B4'}
                  placeholder={'Pin Code'}
                  keyboardType={'number-pad'}
                  maxLength={6}
                />
              )}
              name="pincode"
              defaultValue={''}
            />
          </View>
          <DropDownPicker
            open={open}
            value={genderValue}
            items={gender}
            setOpen={setOpen}
            setValue={setGenderValue}
            setItems={setGender}
            zIndex={3000}
            zIndexInverse={1000}
            placeholder="Gender"
            style={styles.genderPickerContainer}
            placeholderStyle={styles.placeholderText}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            closeAfterSelecting={true}
          />
        </View>
        <View>
          <TouchableOpacity
            // onPress={handleSubmit(onSubmit)}
            onPress={() => navigation.navigate('CardHolder')}
          >
            <View style={styles.submitButtonContainer}>
              <Text style={styles.submitButtonText}>Submit Details</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={handleSubmit(onSubmit)}
          >
            <View style={styles.notNowButtonContainer}>
              <Text style={styles.notNowButtonText}>Not Now</Text>
            </View>
          </TouchableOpacity>
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
  body: {
    padding: SIZES.padding,
    marginTop: Platform.select({
      ios: 30,
      android: 0
    })
  },
  backButtonSize: { width: 24, height: 24 },
  headerTextContainer: {
    paddingVertical: 20,
  },
  headerText: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: SIZES.h3,
    marginTop: 12,
    color: '#797E96',
  },
  submitButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d2d8f',
    borderRadius: 10,
    height: 48,
    marginVertical: 15,
  },
  notNowButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 48,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#4d2d8f',
  },
  submitButtonText: {
    fontSize: SIZES.h3,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  notNowButtonText: {
    fontSize: SIZES.h3,
    color: '#4d2d8f',
    fontWeight: '700',
  },
  pickerContainer: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
    marginTop: 10,
  },
  genderPickerContainer: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 60,
  },
  placeholderText: {
    fontSize: SIZES.h3,
    color: '#B4B4B4',
  },
  dropDownContainerStyle: {
    backgroundColor: '#f4f5f7',
    borderWidth: 0,
  },
  datePicker: {
    backgroundColor: '#ffffff',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 0,
    width: 360,
    height: 500,
  },
  dobContainer: {
    backgroundColor: '#f4f5f7',
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
  },
  dateSubmitContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  dobText: {
    marginLeft: 10,
    color: '#B4B4B4',
    fontSize: SIZES.h3,
  },
  pincodeInput: {
    backgroundColor: '#f4f5f7',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 12,
    fontSize: SIZES.h3,
    color: '#2A2525',
    height: 50
  },
  annualSalaryContainer: {
    backgroundColor: '#f4f5f7',
    height: 50,
    marginTop: 10,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  annualSalaryText: {
    fontSize: SIZES.h3,
    color: '#b4b4b4',
  },
});
