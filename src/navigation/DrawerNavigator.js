/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/drawer/About';
import TermsAndConditions from '../screens/drawer/TermsAndConditions';
import StackNavigator from './StackNavigator';
import {Image, StyleSheet} from 'react-native';
import {icons} from '../constants';
import Support from '../screens/drawer/Support';
import FAQs from '../screens/drawer/FAQs';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 16,
          color: '#6F7FAF',
          fontFamily:Platform.select({
            ios:'Exo2-Bold',
            android:'Exo2Bold'
          }),
        },
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 240,
        },
        drawerType: 'back',
      }}>
      {/* <Drawer.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} /> */}
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerIcon: () => (
            <Image source={icons.homeIcon} style={styles.iconStyle} />
          ),
        }}
        name="Home"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{
          title: 'About',
          drawerIcon: () => (
            <Image source={icons.aboutIcon} style={styles.iconStyle} />
          ),
        }}
        name="About"
        component={About}
      />
      <Drawer.Screen
        options={{
          title: 'FAQs',
          drawerIcon: () => (
            <Image source={icons.faqsIcon} style={styles.iconStyle} />
          ),
        }}
        name="FAQs"
        component={FAQs}
      />
      <Drawer.Screen
        options={{
          title: 'T&C',
          drawerIcon: () => (
            <Image source={icons.tndcIcon} style={styles.iconStyle} />
          ),
        }}
        name="TermsAndConditions"
        component={TermsAndConditions}
      />
      <Drawer.Screen
        options={{
          title: 'Support',
          drawerIcon: () => (
            <Image source={icons.supportIcon} style={styles.iconStyle} />
          ),
        }}
        name="Support"
        component={Support}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#6f7faf',
  },
});
