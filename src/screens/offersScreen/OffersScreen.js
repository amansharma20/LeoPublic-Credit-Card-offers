/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Responsive } from '../../utils/layouts/Layout';
// import { gql, useQuery } from '@apollo/client';
import OffersSegmentNavigator from '../../navigation/OffersSegmentNavigator';
import OffersScreenHeader from '../../components/headers/OffersScreenHeader';
import OffersScreenTopNavigator from '../../navigation/OffersScreenTopNavigator';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);
const { width: WIDTH } = Dimensions.get('window');

export default function OffersScreen(props) {

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'#4d2d8f'}
        barStyle={'light-content'}
      />
      <View>
        <View>
          <OffersScreenHeader />
        </View>
        <View style={styles.mainBody}>
          <View style={{ width: WIDTH, height: "100%" }}>
            <OffersScreenTopNavigator />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  mainBody: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: "100%"
  },
});
