import client from '../apollo'
import gql from 'graphql-tag';
import { SinglePageInfo, File } from '../types/graphql/types'

// 文章分類
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
        }
      }
    `,
    variables: {
      file,
      pageRouteName
    }
  })
}



// type resFileInfo = {
//   data: {
//     singleUpload: File;
//   };
// };
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


export function loginAuthentication(email: string, password: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          name
          id
          email
          token
          exp
          refreshToken
          refreshExp
        }
      }
    `,
    variables: {
      email,
      password,
      pageRouteName
    }
  })
}