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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJQGdtYWlsLmNvbSIsImp0aSI6IjMxZjc1NGQ0LTUyOTItNGMxZi05ZDM1LTNkZDNjMzI3MTJlYyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNDUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJJQGdtYWlsLmNvbSIsIkFwcGxpY2F0aW9uVXNlcklkIjoiNDUiLCJGaXJzdE5hbWUiOiJWaWthc2ggWWFkYXYiLCJMYXN0TmFtZSI6IiIsIlBob25lTnVtYmVyIjoiOTk3MTIzMTQwMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkN1c3RvbWVyIiwiZXhwIjoxNjMyOTA1MDgyLCJpc3MiOiJodHRwczovL3d3dy5sZW8tY2FyZC5hcHAvIiwiYXVkIjoiaHR0cHM6Ly93d3cubGVvLWNhcmQuYXBwLyJ9.xCudhL7jWW6D3Y-KrfSh0msoonuXpMID-fylDwRKdQ4',
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
