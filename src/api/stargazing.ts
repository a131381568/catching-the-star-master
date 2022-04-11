import client from '../apollo'
import gql from 'graphql-tag';
import { stargazingListArr } from '../types/graphql/types'


// 文章列表 ( 分類 )
type resStargazingList = {
  data: {
    stargazingList: stargazingListArr;
  };
};
export function stargazingMapInfo(): Promise<resStargazingList> {
  return client.query({
    query: gql`
      query Query {
        stargazingList {
          stargazing_title
          stargazing_latitude
          stargazing_longitude
          stargazing_image
          stargazing_description
          stargazing_address
          stargazing_link
        }
      }
    `
  })
}