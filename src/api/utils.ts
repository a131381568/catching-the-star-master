import client from '../apollo'
import gql from 'graphql-tag';
import { SinglePageInfo } from '../types/graphql/types'

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