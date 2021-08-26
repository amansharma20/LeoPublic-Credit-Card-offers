/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Dimensions,LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExploreScreenHeader from '../../components/headers/ExploreScreenHeader';
import ExploreTopNavigator from '../../navigation/ExploreTopNavigator';
import { Responsive } from '../../utils/layouts/Layout';
const { width: WIDTH } = Dimensions.get('window');

export default function ExploreScreen() {
  const navigation = useNavigation();

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
          {/* HEADER  */}
          <View>
            <ExploreScreenHeader />
          </View>
          {/* MAIN BODY  */}
          <View style={styles.mainBody}>
            <View style={{width: WIDTH, height: '100%' }}>
              {/* <ExploreSegmentNavigator /> */}
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
    height:'100%',
  },
});
