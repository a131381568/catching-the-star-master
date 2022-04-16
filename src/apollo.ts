import { from } from '@apollo/client/core'
import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { onError } from "@apollo/client/link/error";
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import { TokenRefreshLink } from "apollo-link-token-refresh";


async function isTokenExpired() {
  const token = await localStorage.getItem('token') || "";
  const reFreshToken = await localStorage.getItem('refresh-token') || "";
  return
}

const refreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  // 判斷是否過期
  // ↓ !isTokenExpired() || typeof getAccessToken() !== 'string'
  isTokenValidOrUndefined: () => {
    console.log("第一個")
    const nowTimeStamp = Math.floor(new Date().getTime() / 1000)
    const expiredTimeStamp = Number(localStorage.getItem('expired'))
    console.log(nowTimeStamp, expiredTimeStamp)
    // if (nowTimeStamp > expiredTimeStamp) {
    //   console.log("nowTimeStamp > expiredTimeStamp")
    //   return false
    // } else {
    //   console.log("nowTimeStamp < expiredTimeStamp")
    //   return true
    // }
    return true
  },
  fetchAccessToken: async () => {

    console.log("第二個")
    // 請求 token

    const token = await localStorage.getItem('token') || "";
    const reFreshToken = await localStorage.getItem('refresh-token') || "";

    console.log("token: ", token)
    console.log("reFreshToken: ", reFreshToken)


    const response = await fetch(<string>import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,// ${getAccessToken()}
        'refresh-token': reFreshToken// getRefreshToken()
      },
      body: JSON.stringify({
        query: `
          mutation Mutation($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token
            }
          }`
        ,
        variables: {
          "email": "fong@test.com",
          "password": "123456"
        }
      })
    });


    return response.json()
  },
  handleFetch: async (accessToken, accessExp) => {
    // const accessTokenDecrypted = jwtDecode(accessToken);
    console.log("handleFetch----第四個")
    console.log(accessToken)
    // 設置 token
    // setAccessToken(accessToken);
    await localStorage.setItem("token", accessToken)

    // 設置過期時間
    // setExpiresIn(parseExp(accessTokenDecrypted.exp).toString());
    await localStorage.setItem("expired", accessExp)

    return accessToken
  },
  handleResponse: (operation, accessTokenField) => (response: any) => {
    console.log("第三個", response.data.login.token)
    console.log("response: ", operation, accessTokenField)
    // here you can parse response, handle errors, prepare returned token to
    // further operations

    // returned object should be like this:

    return {
      accessToken: response.data.login.token,
      accessExp: response.data.login.exp
    }
  },
  handleError: err => {
    // full control over handling token fetch Error
    console.warn('Your refresh token is invalid. Try to relogin');
    console.error(err);

    // your custom action here
    // user.logout();
    console.log("登出")
  }
});

const uploadLink = createUploadLink({
  uri: <string>import.meta.env.VITE_API_URL
})

const authLink = setContext(async (_, { headers }) => {
  const token = await localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
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
  // link: errorLink.concat(link),
  link: from([authLink, refreshLink, errorLink, uploadLink]),
  cache
})

export default apolloClient