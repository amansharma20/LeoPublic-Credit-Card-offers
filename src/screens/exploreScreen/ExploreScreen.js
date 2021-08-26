/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import ExploreScreenHeader from '../../components/headers/ExploreScreenHeader';
import ExploreSegmentNavigator from '../../navigation/ExploreSegmentNavigator';
import ExploreTopNavigator from '../../navigation/ExploreTopNavigator';
import { Responsive } from '../../utils/layouts/Layout';
const { width: WIDTH } = Dimensions.get('window');

export default function ExploreScreen() {
  const navigation = useNavigation();
  return (
      <ScrollView style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor={'#4d2d8f'}
          barStyle={'light-content'}
        />
        <View>
          {/* HEADER  */}
          <View>
            <ExploreScreenHeader />
          </View>
          {/* MAIN BODY  */}
          <View style={styles.mainBody}>
            <View style={{width: WIDTH, height: Responsive.height(2750), }}>
              {/* <ExploreSegmentNavigator /> */}
              <ExploreTopNavigator />
            </View>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  mainBody: {
    paddingTop: 30,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
