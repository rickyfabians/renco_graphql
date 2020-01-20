/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import AppNavigation from './app/Navigations/AppNavigation';
import apolloLogger from 'apollo-link-logger';

// Create the client as outlined in the setup guide
const link = ApolloLink.from([
  apolloLogger,
  new HttpLink({ uri: 'https://gawatdarurat.herokuapp.com/v1/graphql' })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        <ApolloProvider client={client}>
          <AppNavigation />
        </ApolloProvider>
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
