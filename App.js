/* eslint-disable prettier/prettier */
import React from 'react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import RootStore from './src/persistence/stores/RootStore';
import { StatusBar } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {applicationProperties} from './application.properties';


const client = new ApolloClient({
  uri: applicationProperties.baseUrl+'/graphql',
  cache: new InMemoryCache(),
  headers:{
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpYW1zaGFudXNpbmdoQGdtYWlsLmNvbSIsImp0aSI6ImQ4Njk2ZjU2LTE0MDgtNDMyYi1hNjFjLTA0NGFmZWJlNGE0YyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMzMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpYW1zaGFudXNpbmdoQGdtYWlsLmNvbSIsIkFwcGxpY2F0aW9uVXNlcklkIjoiMzMiLCJGaXJzdE5hbWUiOiJzaGFudSAiLCJMYXN0TmFtZSI6InNoYW51ICIsIlBob25lTnVtYmVyIjoiODg2MDc3NzcwMyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkN1c3RvbWVyIiwiZXhwIjoxNjMxMjcxNTUyLCJpc3MiOiJodHRwczovL3d3dy5sZW8tY2FyZC5hcHAvIiwiYXVkIjoiaHR0cHM6Ly93d3cubGVvLWNhcmQuYXBwLyJ9.GiIvtmiP3INUYdt9ZzGR-xIIfXqEiAiy9Fn2aYyH3JA'  
  }
});


export default function App() {
  return (
    <Provider store={RootStore}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <StatusBar hidden={false} backgroundColor={'white'} barStyle={'dark-content'} />
          <ApplicationNavigator />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaProvider>
      </ApolloProvider>
    </Provider>

  );
}
