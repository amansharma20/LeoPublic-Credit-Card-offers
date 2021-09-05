/* eslint-disable prettier/prettier */
import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import RootStore from './src/persistence/stores/RootStore';
import {StatusBar} from 'react-native';
import CommonLoading from './src/components/CommonLoading';
import { SessionAction } from './src/persistence/actions/SessionAction';
import SplashScreen from  'react-native-splash-screen';

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });
  
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
