import client from '../apollo'
import gql from 'graphql-tag';
import { stargazingListArr, StargazingConnectionPush, CommonResponse } from '../types/graphql/types'

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
    },
    fetchPolicy: 'no-cache'
  })
}

type resSetNewStargazer = {
  data: {
    setNewStargazer: CommonResponse;
  };
};
export function setNewStargazer(
  stargazingTitle: string,
  stargazingLatitude: number,
  stargazingLongitude: number,
  stargazingImage: string,
  stargazingDescription: string,
  stargazingAddress: string,
  published: Boolean,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation SetNewStargazer(
          $stargazingTitle: String,
          $stargazingLatitude: Float,
          $stargazingLongitude: Float,
          $stargazingImage: String,
          $stargazingDescription: String,
          $stargazingAddress: String,
          $published: Boolean
        ) {
          setNewStargazer(
            stargazing_title: $stargazingTitle,
            stargazing_latitude: $stargazingLatitude,
            stargazing_longitude: $stargazingLongitude,
            stargazing_image: $stargazingImage,
            stargazing_description: $stargazingDescription,
            stargazing_address: $stargazingAddress,
            published: $published) {
              code
              message
          }
      }
    `,
    variables: {
      stargazingTitle,
      stargazingLatitude,
      stargazingLongitude,
      stargazingImage,
      stargazingDescription,
      stargazingAddress,
      published,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}

type resDeleteStargazer = {
  data: {
    deleteStargazer: CommonResponse;
  };
};
export function deleteStargazer(
  stargazingLid: string,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation DeleteStargazer($stargazingLid: String!) {
        deleteStargazer(stargazing_lid: $stargazingLid) {
          code
          message
        }
      }
    `,
    variables: {
      stargazingLid,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}
