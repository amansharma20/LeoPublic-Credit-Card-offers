/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import ExploreScreenHeader from '../../components/headers/ExploreScreenHeader';
import ExploreSegmentNavigator from '../../navigation/ExploreSegmentNavigator';

export default function ExploreScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
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
            <View>
              <ExploreSegmentNavigator />
            </View>
          </View>
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
    // backgroundColor: 'red',
  },
  mainBody: {
    paddingVertical: SIZES.padding,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: '#ffffff',
  },
});
