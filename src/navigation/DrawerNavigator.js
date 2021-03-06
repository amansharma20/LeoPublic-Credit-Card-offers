/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform
} from 'react-native';
import { Responsive } from '../utils/layouts/Layout';
import { icons } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './ApplicationNavigator';

const Drawer = createDrawerNavigator();
const DrawerContent = ({ }) => {
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height: Responsive.screenHeight(),
        backgroundColor: 'white',
      }}>
      <ScrollView
        style={styles.userInformation}
        showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={() => navigation.navigate('About')} activeOpacity={0.5} style={styles.item}>
          <View style={styles.leftIcon}>{/* <Mail/> */}</View>
          <View style={styles.content}>
            <Image source={icons.aboutIcon} style={styles.iconStyle} />
            <Text style={styles.text}>About </Text>
          </View>
          <View style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('FAQs')} activeOpacity={0.5} style={styles.item}>
          <View style={styles.leftIcon}>{/* <Mail/> */}</View>
          <View style={styles.content}>
            <Image source={icons.faqsIcon} style={styles.iconStyle} />
            <Text style={styles.text}>FAQs</Text>
          </View>
          <View style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')} activeOpacity={0.5} style={styles.item}>
          <View style={styles.leftIcon}>{/* <Mail/> */}</View>
          <View style={styles.content}>
            <Image source={icons.tndcIcon} style={styles.iconStyle} />
            <Text style={styles.text}>T&C</Text>
          </View>
          <View style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Support')} activeOpacity={0.5} style={styles.item}>
          <View style={styles.leftIcon}>{/* <Mail/> */}</View>
          <View style={styles.content}>
            <Image source={icons.supportIcon} style={styles.iconStyle} />
            <Text style={styles.text}>Support</Text>
          </View>
          <View style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            signOut();
          }}
          activeOpacity={0.5}
          style={styles.item}>
          <View style={styles.leftIcon}>{/* <Mail/> */}</View>
          <View style={styles.content}>
            <Image source={icons.logOutButtonIcon} style={styles.iconStyle} />
            <Text style={styles.text}>Logout</Text>
          </View>
          <View style={styles.rightIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabBarNavigator"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{ flex: 1 }}
      screenOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        headerShown: false,
      }}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="MyCineScreens">
        {props => <StackNavigator {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  text: {
    fontSize:
      Responsive.width(16),
    color: '#6F7FAF',
    fontFamily: Platform.select({
      ios: 'Exo2-Bold',
      android: 'Exo2Bold'
    })
  },
  drawerStyles: {
    flex: 1,
    width: '60%',
    backgroundColor: 'transparent'
  },
  header: {
  },
  userInformation: {
    marginTop: Responsive.height(6),
    width: '100%',
    maxHeight: Responsive.screenHeight() - 110,
  },
  item: {
    width: '100%',
    height: Responsive.height(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    width: Responsive.width(42),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    width: Responsive.width(30),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 30,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#6f7faf',
    marginRight: 18,
  },
});
