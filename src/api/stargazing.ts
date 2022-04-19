import client from '../apollo'
import gql from 'graphql-tag';
import { stargazingListArr, StargazingConnectionPush } from '../types/graphql/types'

type resStargazingList = {
  data: {
    stargazingList: stargazingListArr;
  };
};
export function stargazingMapInfo(pageRouteName: string): Promise<resStargazingList> {
  return client.query({
    query: gql`
      query StargazingList {
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
    `,
    variables: {
      pageRouteName
    }
  })
}

type resStargazingPagi = {
  data: {
    stargazingPagi: StargazingConnectionPush;
  };
};
export function stargazerList(pageNumber: number, linesPerpage: number, pageRouteName: string): Promise<resStargazingPagi> {
  return client.query({
    query: gql`
      query stargazingPagi($pageNumber: Int, $linesPerpage: Int) {
        stargazingPagi(pageNumber: $pageNumber, linesPerpage: $linesPerpage) {
          edges {
            stargazing_title
            stargazing_latitude
            stargazing_longitude
            stargazing_image
            stargazing_description
            stargazing_address
            stargazing_link
            stargazing_lid
            published
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            start
            end
            totalPagi
          }
        }
      }
    `,
    variables: {
      pageNumber,
      linesPerpage,
      pageRouteName
    }
  })
}