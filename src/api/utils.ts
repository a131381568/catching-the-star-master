import client from '../apollo'
import gql from 'graphql-tag';
import { SinglePageInfo, File } from '../types/graphql/types'

// 頁面路由標題對照表
type resPageInfo = {
  data: {
    pageInfo: [SinglePageInfo];
  };
};
export function pageInfo(pageRouteName: string): Promise<resPageInfo> {
  return client.query({
    query: gql`
      query PageInfo {
        pageInfo {
          page_title
          sub_page_title
          page_route
        }
      }
    `,
    variables: {
      pageRouteName
    }
  })
}


// 檔案上傳
type resFileInfo = {
  data: {
    singleUpload: File;
  };
};
export function updateFile(file: any, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation SingleUpload($file: Upload!) {
        singleUpload(file: $file) {
          filename
          mimetype
          encoding
          s3Path
          errorTitle
        }
      }
    `,
    variables: {
      file,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 取得會員資料
export function getSelfInfo(pageRouteName: string) {
  return client.query({
    query: gql`
      query Me {
        me {
          id
          email
          name
          iat
          exp
        }
      }
    `,
    variables: {
      pageRouteName
    }
  })
}


// 登入
export function loginAuthentication(email: string, password: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          name
          uid
          email
          token
          exp
          refreshToken
          refreshExp
          errorTitle
          errorMsg
        }
      }
    `,
    variables: {
      email,
      password,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}