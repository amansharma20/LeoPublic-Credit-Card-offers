/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../constants/theme';
import ProfileOffersScreenHeader from '../../components/headers/ProfileHeader';
import {Responsive} from '../../utils/layouts/Layout';
import {images} from '../../constants';
import AddButton from '../../assets/svgs/profileScreenAddButton';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <ProfileOffersScreenHeader />
      </View>
      <View style={styles.backgroundColorView}>
        <View style={styles.profilePictureHeaderContainer}>
          <View style={styles.pfpAlignmentContainer}>
            <Image
              source={{
                uri: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
              }}
              style={styles.profileImage}
            />
            <Text style={styles.nameText}>Navneet Singh</Text>
            <Text style={styles.emailText}>navneet@webority.com</Text>
            <Text style={styles.birthDateText}>28 July 1984</Text>
          </View>
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.topContainerBackgroundColor}>
          <Text style={styles.topContainerHeaderText}>Employment Type</Text>
          <Text style={styles.topContainerSubtitleText}>Business</Text>
        </View>
        <View style={styles.topContainerBackgroundColor}>
          <Text style={styles.topContainerHeaderText}>Annual Salary Range</Text>
          <Text style={styles.topContainerSubtitleText}>10 L - 50 L</Text>
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
      <View style={styles.addContainer}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    padding: SIZES.padding,
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
  pfpAlignmentContainer: {alignItems: 'center', marginTop: -65},
  profileImage: {
    width: Responsive.width(88),
    height: Responsive.height(88),
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 10,
  },
  nameText: {
    fontSize: 18,
    color: '#060417',
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
    }),
    lineHeight: 28,
    paddingTop: 8,
  },
  emailText: {
    fontSize: SIZES.h3,
    color: '#6F7FAF',
    lineHeight: 20,
    paddingVertical: 8,
    fontFamily:Platform.select({
      ios:'Exo2-Medium',
      android:'Exo2Medium'
    }),
  },
  birthDateText: {fontSize: SIZES.h3, color: '#6F7FAF', lineHeight: 20,
  fontFamily:Platform.select({
    ios:'Exo2-Medium',
    android:'Exo2Medium'
  }),
  }
   ,
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#e4e7f0',
  },
  topContainerBackgroundColor: {
    backgroundColor: '#effafa',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  topContainerHeaderText: {color: '#6F7FAF', fontSize: 14, 
  fontFamily:Platform.select({
    ios:'Exo2-Medium',
    android:'Exo2Medium'
  }),
},
  topContainerSubtitleText: {color: '#060417', fontSize: 18, 
  fontFamily:Platform.select({
    ios:'Exo2-Bold',
    android:'Exo2Bold'
  }),
},
  addContainer: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderColor: '#e4e7f0',
  },
  addContainerTextContainer: {
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e7f0',
  },
  addContainerHeaderText: {paddingBottom: 22, fontSize: 16, 
    fontFamily:Platform.select({
      ios:'Exo2-Bold',
      android:'Exo2Bold'
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
  addContainerSubtitleText: {color: '#1C1B1B', fontSize: 16,
  fontFamily:Platform.select({
    ios:'Exo2-Medium',
    android:'Exo2Medium'
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
});
