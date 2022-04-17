import client from '../apollo'
import gql from 'graphql-tag';
import { stargazingListArr } from '../types/graphql/types'

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