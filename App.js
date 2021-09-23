/* eslint-disable prettier/prettier */
import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import RootStore from './src/persistence/stores/RootStore';
import { StatusBar } from 'react-native';
import CommonLoading from './src/components/CommonLoading';

export default function App() {
  return (
    <Provider store={RootStore}>
      <SafeAreaProvider>
        <StatusBar
          hidden={false}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <ApplicationNavigator />
        <Toast ref={ref => Toast.setRef(ref)} />
        <CommonLoading ref={ref => CommonLoading.setRef(ref)} />
      </SafeAreaProvider>
    </Provider>
  );
}
