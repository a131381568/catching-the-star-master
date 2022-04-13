import client from '../apollo'
import gql from 'graphql-tag';
import { SinglePageInfo, File } from '../types/graphql/types'

// 文章分類
type resPageInfo = {
  data: {
    pageInfo: [SinglePageInfo];
  };
};
export function pageInfo(): Promise<resPageInfo> {
  return client.query({
    query: gql`
      query PageInfo {
        pageInfo {
          page_title
          sub_page_title
          page_route
        }
      }
    `
  })
}

type resFileInfo = {
  data: {
    singleUpload: File;
  };
};
export function updateFile(file: any) {
  return client.mutate({
    mutation: gql`
      mutation Mutation($file: Upload!) {
        singleUpload(file: $file) {
          filename
          mimetype
          encoding
        }
      }
    `,
    variables: {
      file
    }
  })
}