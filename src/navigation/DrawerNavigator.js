
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Responsive } from '../utils/layouts/Layout';


const Drawer = createDrawerNavigator();
const DrawerContent = ({ }) => {

  return (
    <View style={{
      width: '100%',
      height: Responsive.screenHeight(),
      backgroundColor: 'white',
    }}>
      <View style={styles.header}>
        {/* <FastImage source={require('../../assets/images/logo.gif')} resizeMode={FastImage.resizeMode.cover} style={{
                  width: '100%',
                  height: '100%',
              }}/> */}
      </View>
      <ScrollView style={styles.userInformation} showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.5} style={styles.item}>
          <View style={styles.leftIcon}>
            {/* <FastImage source={user.loggedIn ? require('../../assets/images/avatar/avatar1.png') : require('../../assets/images/useravatar.png')} resizeMode={FastImage.resizeMode.contain} style={{
                          width: Responsive.width(32),
                          height: Responsive.height(32),
                      }}/> */}
          </View>
          <View style={styles.content}>
            {/* <CommonText style={styles.text}>{user.loggedIn ? user.user.username : lang.guest}</CommonText> */}
          </View>
          <View style={styles.rightIcon}>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.item}>
          <View style={styles.leftIcon}>
            {/* <Mail/> */}
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>HELo </Text>
          </View>
          <View style={styles.rightIcon}>

          </View>
        </TouchableOpacity>
        {/* <CommonLine style={{marginTop: Responsive.height(2)}}/>
              <CommonLine style={{marginTop: Responsive.height(2)}}/> */}
      </ScrollView>
    </View>
  );
};


// export default function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//         drawerLabelStyle: {
//           fontSize: 16,
//           color: '#6F7FAF',
//           fontFamily:Platform.select({
//             ios:'Exo2-Bold',
//             android:'Exo2Bold'
//           }),
//         },
//         drawerStyle: {
//           backgroundColor: '#ffffff',
//           width: 240,
//         },
//         drawerType="slide"
//       }}>
//       {/* <Drawer.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} /> */}
//       <Drawer.Screen
//         options={{
//           title: 'Home',
//           drawerIcon: () => (
//             <Image source={icons.homeIcon} style={styles.iconStyle} />
//           ),
//         }}
//         name="Home"
//         component={StackNavigator}
//       />
//       <Drawer.Screen
//         options={{
//           title: 'About',
//           drawerIcon: () => (
//             <Image source={icons.aboutIcon} style={styles.iconStyle} />
//           ),
//         }}
//         name="About"
//         component={About}
//       />
//       <Drawer.Screen
//         options={{
//           title: 'FAQs',
//           drawerIcon: () => (
//             <Image source={icons.faqsIcon} style={styles.iconStyle} />
//           ),
//         }}
//         name="FAQs"
//         component={FAQs}
//       />
//       <Drawer.Screen
//         options={{
//           title: 'T&C',
//           drawerIcon: () => (
//             <Image source={icons.tndcIcon} style={styles.iconStyle} />
//           ),
//         }}
//         name="TermsAndConditions"
//         component={TermsAndConditions}
//       />
//       <Drawer.Screen
//         options={{
//           title: 'Support',
//           drawerIcon: () => (
//             <Image source={icons.supportIcon} style={styles.iconStyle} />
//           ),
//         }}
//         name="Support"
//         component={Support}
//       />
//     </Drawer.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   iconStyle: {
//     width: 30,
//     height: 24,
//     resizeMode: 'contain',
//     tintColor: '#6f7faf',
//   },
// });



export default function DrawerNavigator() {


  return (
    <Drawer.Navigator
      initialRouteName="Showing"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{ flex: 1 }}
      screenOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        headerShown: false

      }}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name='MyCineScreens'>
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
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  text: { fontSize: Responsive.width(12), fontWeight: '400' },
  drawerStyles: { flex: 1, width: '60%', backgroundColor: 'transparent' },
  header: {
    backgroundColor: "red",
    height: Responsive.height(80),
    width: '100%',
  },
  userInformation: {
    marginTop: Responsive.height(6),
    width: '100%',
    maxHeight: Responsive.screenHeight() - 110,
  },
  item: {
    width: '100%',
    height: Responsive.height(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Responsive.height(8),
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
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
