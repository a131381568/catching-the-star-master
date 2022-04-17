import { from } from '@apollo/client/core'
import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { onError } from "@apollo/client/link/error";
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import { TokenRefreshLink } from "apollo-link-token-refresh";

const refreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  // 判斷是否過期
  // ↓ !isTokenExpired() || typeof getAccessToken() !== 'string'
  isTokenValidOrUndefined: operation => {
    // console.log("query:", operation.operationName)
    // console.log("第一個")

    const nowTimeStamp = Math.floor(new Date().getTime() / 1000)
    const expiredTimeStamp = Number(localStorage.getItem('expired'))
    const reFreshTokenTimeStamp = Number(localStorage.getItem('refresh-expired'))
    let tokenState = false
    let refreshState = false

    if (nowTimeStamp > expiredTimeStamp) {
      // console.log("token 已過期")
      tokenState = false
    } else {
      // console.log("token 正常")
      tokenState = true
    }
    if (nowTimeStamp > reFreshTokenTimeStamp) {
      // console.log("reFresh 已過期")
      refreshState = false
    } else {
      // console.log("reFresh 正常")
      refreshState = true
    }

    if (!tokenState && refreshState) {
      return false
    } else if (!tokenState && !tokenState) {
      // 彈回登入頁
      window.location.pathname = '/login';
      return true
    } else {
      return true
    }
  },
  fetchAccessToken: async () => {
    // console.log("第二個")
    // 請求 token
    const oriToken = await localStorage.getItem('token') || "";
    const userId = await Number(localStorage.getItem('id')) || null;
    const userMail = await localStorage.getItem('email') || "";
    const reFreshToken = await localStorage.getItem('refresh-token') || "";
    const response = await fetch(<string>import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${oriToken}`,
      },
      body: JSON.stringify({
        query: `
          mutation ExtendExpired($userId: Int!, $oriReToken: String!, $email: String!) {
            extendExpired(userId: $userId, oriReToken: $oriReToken, email: $email) {
              name
              id
              email
              iat
              token
              exp
              refreshToken
              refreshExp
            }
          }
        `,
        variables: {
          "userId": userId,
          "email": userMail,
          "oriReToken": reFreshToken
        }
      })
    });
    return response.json()
  },
  handleFetch: accessToken => {
    // console.log("handleFetch----第四個")
    return accessToken
  },
  handleResponse: (operation, accessTokenField) => async (response: any) => {
    // console.log("第三個", response.data.extendExpired)
    let tokenTotalInfo = {
      accessToken: response.data.extendExpired.token,
      accessExp: response.data.extendExpired.exp,
      refreshToken: response.data.extendExpired.refreshToken,
      refreshExp: response.data.extendExpired.refreshExp
    }
    await localStorage.setItem("token", tokenTotalInfo.accessToken)
    await localStorage.setItem("refresh-token", tokenTotalInfo.refreshToken)
    await localStorage.setItem("expired", tokenTotalInfo.accessExp)
    await localStorage.setItem("refresh-expired", tokenTotalInfo.refreshExp)

    return tokenTotalInfo
  },
  handleError: err => {
    console.warn('Your refresh token is invalid. Try to relogin');
    console.error(err);
    // user.logout();
    console.log("登出")
  }
});

const uploadLink = createUploadLink({
  uri: <string>import.meta.env.VITE_API_URL
})

const authLink = setContext(async (_, { headers }) => {
  // console.log("setContext:...")
  const token = await localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

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
      // 彈回 404
      window.location.pathname = '/notfound';
    }
  }
});

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: from([authLink, refreshLink, errorLink, uploadLink]),
  cache
})

export default apolloClient