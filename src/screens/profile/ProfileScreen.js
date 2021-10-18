/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
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
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../persistence/query/Query';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { applicationProperties } from '../../../application.properties';
import Toast from 'react-native-toast-message';


export default function ProfileScreen() {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function logOutCalled() {
    const dummyData = {};
    await SessionService.setSession(dummyData);
    dispatch(SessionAction.getSession());
    navigation.replace('Login');
  }

  const { loading, error, data } = useQuery(GQLQuery.GET_USER_PROFILE);

  console.log(error);

  const UserProfileData = data && data.UserProfileQuery && data.UserProfileQuery.GetUserProfile;
  //console.log(applicationProperties.imageUrl+UserProfileData.ProfilePictureStoragePath)


  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View>
          <ProfileOffersScreenHeader />
        </View>
        <View style={styles.backgroundColorView}>
          <View style={styles.profilePictureHeaderContainer}>
            <View style={styles.pfpAlignmentContainer}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200/300/?blur=2',
                }}
                style={styles.profileImage}
              />
              <Text style={styles.nameText}>{UserProfileData && UserProfileData.FirstName} {UserProfileData && UserProfileData.LastName}</Text>
              <Text style={styles.emailText}>{UserProfileData && UserProfileData.ApplicationUser.Email}</Text>
              <Text style={styles.birthDateText}>{UserProfileData && UserProfileData.DateOfBirth}</Text>
            </View>
          </View>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.topContainerBackgroundColor}>
            <Text style={styles.topContainerHeaderText}>Employment Type</Text>
            <Text style={styles.topContainerSubtitleText}>{UserProfileData && UserProfileData.EmploymentType == null ? 'Nil' :  UserProfileData && UserProfileData.EmploymentType}</Text>
          </View>
          <View style={styles.topContainerBackgroundColor}>
            <Text style={styles.topContainerHeaderText}>Annual Salary Range</Text>
            <Text style={styles.topContainerSubtitleText}>{UserProfileData && UserProfileData.AnnualSalary == null ? 'Nil' : UserProfileData &&  UserProfileData.AnnualSalary}</Text>
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
        <View style={styles.addContainerBottom}>
          <Text style={styles.addContainerHeaderText}>Monthly Spend Pattern</Text>
          <View style={styles.addMonthlyExpenseContainer}>
            <Text style={styles.addContainerSubtitleText}>
              Add your monthly expense
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('MonthlySpend')}>
              <AddButton />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{ backgroundColor: '#ffffff', padding: SIZES.padding, borderBottomColor: '#e4e7f0', borderBottomWidth: 1 }}> */}


          {/* <View>
            <Text style={{
              color: '#7a869a', fontFamily: Platform.select({
                ios: 'Exo2-Bold',
                android: 'Exo2Bold',
              }),
            }}>
              Monthly Expense
            </Text>
          </View>
          <View style={{ paddingVertical: SIZES.padding, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}>
                60%
              </Text>
              <AnimatedCircularProgress
                style={{ paddingHorizontal: SIZES.padding2 }}
                size={75}
                width={5}
                fill={30}
                tintColor="#4D2D8F"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#b9b9b9"
              />
              <Text style={{
                marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#7A869A',
              }}>
                Shopping
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}>
                60%
              </Text>
              <AnimatedCircularProgress
                style={{ paddingHorizontal: SIZES.padding2 }}
                size={75}
                width={5}
                fill={30}
                tintColor="#4D2D8F"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#b9b9b9"
              />
              <Text style={{
                marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#7A869A',
              }}>
                Shopping
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}>
                60%
              </Text>
              <AnimatedCircularProgress
                style={{ paddingHorizontal: SIZES.padding2 }}
                size={75}
                width={5}
                fill={30}
                tintColor="#4D2D8F"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#b9b9b9"
              />
              <Text style={{
                marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#7A869A',
              }}>
                Shopping
              </Text>
            </View>
          </View>
          <View style={{ paddingVertical: SIZES.padding2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}>
                60%
              </Text>
              <AnimatedCircularProgress
                style={{ paddingHorizontal: SIZES.padding2 }}
                size={75}
                width={5}
                fill={30}
                tintColor="#4D2D8F"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#b9b9b9"
              />
              <Text style={{
                marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#7A869A',
              }}>
                Shopping
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}>
                60%
              </Text>
              <AnimatedCircularProgress
                style={{ paddingHorizontal: SIZES.padding2 }}
                size={75}
                width={5}
                fill={30}
                tintColor="#4D2D8F"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#b9b9b9"
              />
              <Text style={{
                marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#7A869A',
              }}>
                Shopping
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                marginTop: 30, position: 'absolute', color: '#4D2D8F', fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }),
              }}>
                60%
              </Text>
              <AnimatedCircularProgress
                style={{ paddingHorizontal: SIZES.padding2 }}
                size={75}
                width={5}
                fill={30}
                tintColor="#4D2D8F"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#b9b9b9"
              />
              <Text style={{
                marginTop: 2, fontSize: 14, fontFamily: Platform.select({
                  ios: 'Exo2-Bold',
                  android: 'Exo2Bold',
                }), color: '#7A869A',
              }}>
                Shopping
              </Text>
            </View>
          </View> */}

        {/* </View> */}
        <View style={{ backgroundColor: '#ffffff' }}>
          <TouchableOpacity style={{ padding: SIZES.padding }} onPress={async () => {
            await logOutCalled();
          }}>
            <View style={{ flexDirection: 'row', paddingBottom:200 }}>
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
