/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, Dimensions, LogBox } from 'react-native';
import ExploreScreenHeader from '../../components/headers/ExploreScreenHeader';
import ExploreTopNavigator from '../../navigation/others/ExploreTopNavigator';
const { width: WIDTH } = Dimensions.get('window');

export default function ExploreScreen() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Warning: Each', 'Warning: Failed'])
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'#4d2d8f'}
        barStyle={'light-content'}
      />
      <View>
        <ExploreScreenHeader />
        <View style={styles.mainBody}>
          <View style={{ width: WIDTH, height: '100%', paddingVertical: 0 }}>
            <ExploreTopNavigator />
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
    height: '100%',
  },
});
