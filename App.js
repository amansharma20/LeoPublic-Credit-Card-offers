/* eslint-disable prettier/prettier */
import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import RootStore from './src/persistence/stores/RootStore';
import {StatusBar} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {applicationProperties} from './application.properties';
import CommonLoading from './src/components/CommonLoading';

const client = new ApolloClient({
  uri: applicationProperties.baseUrl + '/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFudUB3ZWJvcml0eS5jb20iLCJqdGkiOiJkYzVmODE5OS1kNWQ0LTQ5NjItYTBjYy0zMjU4ODJmZGYzOTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjM1IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic2hhbnVAd2Vib3JpdHkuY29tIiwiQXBwbGljYXRpb25Vc2VySWQiOiIzNSIsIkZpcnN0TmFtZSI6IlNoYW51IiwiTGFzdE5hbWUiOiJTaW5naCIsIlBob25lTnVtYmVyIjoiODg2MDc3NzcwMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkN1c3RvbWVyIiwiZXhwIjoxNjMyOTA3NTc0LCJpc3MiOiJodHRwczovL3d3dy5sZW8tY2FyZC5hcHAvIiwiYXVkIjoiaHR0cHM6Ly93d3cubGVvLWNhcmQuYXBwLyJ9.iH2L_NeTeLv_QIj7DRpIUbbjp3HgVWRaWpZEe5lrewA',
  },
});

export default function App() {
  return (
    <Provider store={RootStore}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Provider>
  );
}
