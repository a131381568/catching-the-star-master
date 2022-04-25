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


// 新增文章分類
export function setNewCategory(categoryName: string, categoryId: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation SetNewCategory($categoryName: String!, $categoryId: String!) {
        setNewCategory(categoryName: $categoryName, categoryId: $categoryId) {
          code
          message
        }
      }
    `,
    variables: {
      categoryName,
      categoryId,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 刪除文章分類
export function deleteCategory(categoryId: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation DeleteCategory($categoryId: String!) {
        deleteCategory(categoryId: $categoryId) {
          code
          message
        }
      }
    `,
    variables: {
      categoryId,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}
