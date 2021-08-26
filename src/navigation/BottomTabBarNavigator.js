/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyCards from '../screens/home/MyCards';
import ExploreScreen from '../screens/exploreScreen/ExploreScreen';
import OffersScreen from '../screens/offersScreen/OffersScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { Responsive } from '../utils/layouts/Layout';
import Home from '../assets/svgs/Home.js';
import Explore from '../assets/svgs/Explore.js';
import Offers from '../assets/svgs/Offers.js';
import Profile from '../assets/svgs/Profile.js';

function MyTabBar({state, descriptors, navigation}) {

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
      return null;
  }

  return (
      <View style={styles.container}>
          <View style={styles.menuContainer}>
              {state.routes.map((route, index) => {
                  const {options} = descriptors[route.key];
                  const label =
                      options.tabBarLabel !== undefined
                          ? options.tabBarLabel
                          : options.title !== undefined
                          ? options.title
                          : route.name;

                  const isFocused = state.index === index;
                  const menuIcon = options.tabBarIcon(isFocused);
                  const onPress = () => {
                      const event = navigation.emit({
                          type: 'tabPress',
                          target: route.key,
                          canPreventDefault: true,
                      });

                      if (!isFocused && !event.defaultPrevented) {
                          navigation.navigate(route.name);
                      }
                  };

                  const onLongPress = () => {
                      navigation.emit({
                          type: 'tabLongPress',
                          target: route.key,
                      });
                  };
                  return (
                      <TouchableOpacity
                          accessibilityRole="button"
                          accessibilityState={isFocused ? {selected: true} : {}}
                          accessibilityLabel={options.tabBarAccessibilityLabel}
                          testID={options.tabBarTestID}
                          onPress={onPress}
                          onLongPress={onLongPress}
                          style={[styles.menuItem, isFocused ? {backgroundColor: '#f6f6f6', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  alignContent: 'center'} : {justifyContent: 'center', alignItems: 'center', flexDirection: 'column', alignContent: 'center'}]}
                          key={route.key}
                      >
                          {menuIcon}
                        <Text style={{ color: isFocused ? '#4D2D8F' : '#9498AB', fontSize: 12, marginTop: 2, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            {label}
                        </Text>
                      </TouchableOpacity>

                  );
              })}
          </View>
      </View>
  );
}

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

export default function BottomTabBarNavigator() {
  return (
    // <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>

    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="My Cards" component={MyCards} options={{
                tabBarIcon: (focused) => (
                    <Home focused={focused}/>
                ),
                headerShown: false,
            }}/>
            <Tab.Screen name="Explore" component={ExploreScreen} options={{
                tabBarIcon: (focused) => (
                    <Explore focused={focused}/>
                ),
                headerShown: false,
            }}/>
             <Tab.Screen name="Offers" component={OffersScreen} options={{
                tabBarIcon: (focused) => (
                    <Offers focused={focused}/>
                ),
                headerShown: false,
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: (focused) => (
                    <Profile focused={focused}/>
                ),
                headerShown: false,
            }}/>
        </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
      height: Platform.select({
          ios:Responsive.height(80),
          android:Responsive.height(60)
      }),
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#f6f6f6',
  },
  menuContainer: {
      flexDirection: 'row',
      width: '100%',
      paddingLeft: Responsive.width(10),
      paddingRight: Responsive.width(10),
      height: Responsive.height(60),
      alignItems: 'center',
  },
  menuItem: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      height: Responsive.height(30),
      flexDirection: 'row',
      borderRadius: Responsive.width(30),
      paddingLeft: Responsive.width(8),
      paddingRight: Responsive.width(8),
  },
  menuIcon: {
      width: Responsive.width(35),
      height: Responsive.height(35),
  },
  cartContainer: {
      height: Responsive.height(56),
      width: Responsive.width(116),
      position: 'absolute',
      top: Responsive.height(0),
      right: 0,
  },
});
