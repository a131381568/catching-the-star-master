import client from '../apollo'
import gql from 'graphql-tag';
import { FacilitiesArr, ObservatoriesArr } from '../types/graphql/types'

// 設施+天文台列表
type resFacilities = {
  data: {
    facilitiesList: FacilitiesArr,
    observatoriesList: ObservatoriesArr
  };
};
export function facilitiesData(pageRouteName: string, cacheMode: boolean): Promise<resFacilities> {
  return client.query({
    query: gql`
      query FacilitiesList {
        facilitiesList {
          facilities_title
          facilities_description
          facilities_image
          facilities_link
        }
        observatoriesList {
          observatory_category_name
          observatory_category_id
          observatory_post_content
        }
      }
    `,
    variables: {
      pageRouteName
    },
    fetchPolicy: cacheMode ? "cache-first" : "no-cache"
  })
}


// 設施列表
type resFacilitiesList = {
  data: {
    facilitiesList: FacilitiesArr
  };
};
export function facilitiesList(pageRouteName: string): Promise<resFacilitiesList> {
  return client.query({
    query: gql`
      query FacilitiesList {
        facilitiesList {
          facilities_orderid
          facilities_title
          facilities_link
        }
      }
    `,
    variables: {
      pageRouteName
    },
    fetchPolicy: "no-cache"
  })
}


// 刪除設施
export function deleteOrganization(facilitiesOrderid: number, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation DeleteOrganization($facilitiesOrderid: Int!) {
        deleteOrganization(facilities_orderid: $facilitiesOrderid) {
          code
          message
        }
      }
    `,
    variables: {
      facilitiesOrderid,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}