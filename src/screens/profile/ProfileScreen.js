/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import ProfileOffersScreenHeader from '../../components/headers/ProfileHeader';
import { Responsive } from '../../utils/layouts/Layout';
import { icons } from '../../constants';
import AddButton from '../../assets/svgs/profileScreenAddButton';
import { SessionService } from '../../persistence/services/SessionService';
import { SessionAction } from '../../persistence/actions/SessionAction';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../persistence/query/Query';
import MonthlySpendCircularView from './monthlySpend/MonthlySpendCircularView';
import { launchImageLibrary } from 'react-native-image-picker';
import { applicationProperties } from '../../../application.properties';
import axios from 'axios';
import { AuthContext } from '../../navigation/ApplicationNavigator';






export default function ProfileScreen() {

  const { signOut } = useContext(AuthContext);

  console.log(AuthContext)

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const session = useSelector(state => state.SessionReducer.data);
  
  const [profilePic, setProfilePic] = useState("https://picsum.photos/200/300/?blur=2");

  const { data } = useQuery(GQLQuery.GET_USER_PROFILE);
  const UserProfileData = data && data.UserProfileQuery && data.UserProfileQuery.GetUserProfile;

  const { data: userExpenseQlResponse, error: userExpenseError } = useQuery(GQLQuery.GET_USER_EXPENSE);

  const userExpense = userExpenseQlResponse && userExpenseQlResponse.UserExpenseQuery && userExpenseQlResponse.UserExpenseQuery.GetUserExpenses

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {

      const FileName = response.assets && response.assets[0] && response.assets[0].fileName
      const type = response.assets && response.assets[0] && response.assets[0].type
      const uri = response.assets && response.assets[0] && response.assets[0].uri



      const datas = new FormData();
      datas.append('ImageFile', {
        fileName: FileName,
        type: type,
        name:type,
        uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
      });
      uploadImage(datas)
    });
  };

  async function uploadImage(data) {

    const client = axios.create({
      baseURL: applicationProperties.baseUrl,
    });
    const header = {
      Authorization: Bearer,
      'Content-Type': 'multipart/form-data'
    }
    client.post('Profile/CustomerProfileUpdate', data, {
      headers:header
    }).then((response) => {
      console.log(response)
     
    })
      .catch((error) => {
        
      })
  }
  const profilePicture = data && data.UserProfileQuery && data.UserProfileQuery.GetUserProfile && data && data.UserProfileQuery && data.UserProfileQuery.GetUserProfile.ProfilePictureStoragePath

  async function logOutCalled() {
    const data ={
      data : {
         token: '',
         signUp: false
       }
     }
    await SessionService.setSession(data);
    dispatch(SessionAction.getSession());
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View>
          <ProfileOffersScreenHeader />
        </View>
        <View style={styles.backgroundColorView}>

          <View style={styles.profilePictureHeaderContainer}>
            <View style={styles.pfpAlignmentContainer}>
              <TouchableOpacity onPress={() => {
                selectFile()
              }}>
                <Image
                  source={{
                    uri: applicationProperties.imageUrl + profilePicture,
                  }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
              <Text style={styles.nameText}>{UserProfileData && UserProfileData.FirstName} {UserProfileData && UserProfileData.LastName}</Text>
              <Text style={styles.emailText}>{UserProfileData && UserProfileData.ApplicationUser.Email}</Text>
              <Text style={styles.birthDateText}>{UserProfileData && UserProfileData.DateOfBirth}</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate('EditProfile')
              }}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.topContainerBackgroundColor}>
            <Text style={styles.topContainerHeaderText}>Employment Type</Text>
            <Text style={styles.topContainerSubtitleText}>{UserProfileData && UserProfileData.EmploymentType == null ? "Nil" : UserProfileData && UserProfileData.EmploymentType}</Text>
          </View>
          <View style={styles.topContainerBackgroundColor}>
            <Text style={styles.topContainerHeaderText}>Annual Salary Range</Text>
            <Text style={styles.topContainerSubtitleText}>{UserProfileData && UserProfileData.AnnualSalary == null ? "Nil" : UserProfileData && UserProfileData.AnnualSalary}</Text>
          </View>
        </View>
        <View style={styles.addContainer}>
          <Text style={styles.addContainerHeaderText}>Preferences</Text>
          <View style={styles.addContainerSubtitleTextContainer}>
            <Text style={styles.addContainerSubtitleText}>
              Add your preferences
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChoosePreferences')}>
              <AddButton />
            </TouchableOpacity>
          </View>
        </View>
        {userExpense === null || userExpense === undefined ? <>
          <View style={styles.addContainerBottom}>
            <Text style={styles.addContainerHeaderText}>Monthly Spend Pattern</Text>
            <View style={styles.addMonthlyExpenseContainer}>
              <Text style={styles.addContainerSubtitleText}>
                Add your monthly expense
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MonthlySpend', {
                  expense: userExpense
                })}>
                <AddButton />
              </TouchableOpacity>
            </View>
          </View>
        </> : <MonthlySpendCircularView />}

        <View style={{ backgroundColor: '#ffffff' }}>
          <TouchableOpacity style={{ padding: SIZES.padding }} onPress={async () => {
            //await logOutCalled();
            signOut();
          }}>
            <View style={{ flexDirection: 'row', paddingBottom: 200 }}>
              <Image source={icons.logOutButtonIcon} style={{ width: 22, height: 22 }} />
              <Text style={{
                fontSize: 17, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#6F7FAF', marginLeft: 20,
              }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  body: {
    //padding: SIZES.padding,
  },
  backgroundColorView: {
    backgroundColor: '#4d2d8f',
  },
  profilePictureHeaderContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: SIZES.padding,
    marginTop: Responsive.height(50),
  },
  pfpAlignmentContainer: { alignItems: 'center', marginTop: -65 },
  profileImage: {
    width: Responsive.width(88),
    height: Responsive.height(88),
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 1,
  },
  nameText: {
    fontSize: 18,
    color: '#060417',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
    lineHeight: 28,
    paddingTop: 8,
  },
  emailText: {
    fontSize: SIZES.h3,
    color: '#6F7FAF',
    lineHeight: 20,
    paddingVertical: 8,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  birthDateText: {
    fontSize: SIZES.h3, color: '#6F7FAF', lineHeight: 20,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  }
  ,
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#e4e7f0',
    backgroundColor: '#ffffff',
  },
  topContainerBackgroundColor: {
    backgroundColor: '#effafa',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  topContainerHeaderText: {
    color: '#6F7FAF', fontSize: 14,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  topContainerSubtitleText: {
    color: '#060417', fontSize: 18,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  addContainer: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderColor: '#e4e7f0',
    backgroundColor: '#ffffff',
  },
  addContainerBottom: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderColor: '#e4e7f0',
    backgroundColor: '#ffffff',
    paddingBottom: 60,
  },
  addContainerTextContainer: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e7f0',
  },
  addContainerHeaderText: {
    paddingBottom: 22, fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold',
    }),
  },
  addContainerSubtitleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9F4F2',
    padding: SIZES.padding,
    borderRadius: 16,
    alignItems: 'center',
  },
  addContainerSubtitleText: {
    color: '#1C1B1B', fontSize: 16,
    fontFamily: Platform.select({
      ios: 'Exo2-Medium',
      android: 'Exo2Medium',
    }),
  },
  addMonthlyExpenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0FAFB',
    padding: SIZES.padding,
    borderRadius: 16,
    alignItems: 'center',
  },
  logOutButtonContainer: { backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#e4e7f0' },

});
