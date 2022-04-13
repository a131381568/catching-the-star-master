import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { onError } from "@apollo/client/link/error";

import { createUploadLink } from 'apollo-upload-client'
const link = createUploadLink({
  uri: <string>import.meta.env.VITE_API_URL
})

// const httpLink = new HttpLink({
//   uri: <string>import.meta.env.VITE_API_URL
// })

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    if (JSON.parse(JSON.stringify(networkError)).statusCode !== 200) {
      alert(networkError)
      console.log(`[Network error]: ${networkError}`);
      // window.location.pathname = '/notfound';
    }
  }
});

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  // link: errorLink.concat(httpLink),
  link: errorLink.concat(link),
  cache
})

export default apolloClient