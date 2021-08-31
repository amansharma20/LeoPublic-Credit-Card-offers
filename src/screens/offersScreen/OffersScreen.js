/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import OffersScreenHeader from '../../components/headers/OffersScreenHeader';
import OffersScreenTopNavigator from '../../navigation/OffersScreenTopNavigator';

const { width: WIDTH } = Dimensions.get('window');

export default function OffersScreen() {

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
