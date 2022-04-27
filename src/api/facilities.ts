import client from '../apollo'
import gql from 'graphql-tag';
import { FacilitiesArr, ObservatoriesArr, Facility } from '../types/graphql/types'

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



// 新增設施
export function setNewOrganization(facilitiesTitle: string, facilitiesDescription: string, facilitiesImage: string, facilitiesLink: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation SetNewOrganization($facilitiesTitle: String!, $facilitiesDescription: String!, $facilitiesImage: String!, $facilitiesLink: String!) {
        setNewOrganization(facilities_title: $facilitiesTitle, facilities_description: $facilitiesDescription, facilities_image: $facilitiesImage, facilities_link: $facilitiesLink) {
          code
          message
        }
      }
    `,
    variables: {
      facilitiesTitle,
      facilitiesDescription,
      facilitiesImage,
      facilitiesLink,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 查詢指定 oid 設施
type resGetSingleOrganization = {
  data: {
    getSingleOrganization: Facility
  };
};
export function getSingleOrganization(facilitiesOrderid: number, pageRouteName: string): Promise<resGetSingleOrganization> {
  return client.query({
    query: gql`
      query GetSingleOrganization($facilitiesOrderid: Int!) {
        getSingleOrganization(facilities_orderid: $facilitiesOrderid) {
          facilities_orderid
          facilities_title
          facilities_description
          facilities_image
          facilities_link
        }
      }
    `,
    variables: {
      facilitiesOrderid,
      pageRouteName
    },
    fetchPolicy: "no-cache"
  })
}



// 編輯設施
export function mutOrganization(facilitiesOrderid: number, facilitiesTitle: string, facilitiesDescription: string, facilitiesImage: string, facilitiesLink: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation MutOrganization($facilitiesOrderid: Int!, $facilitiesTitle: String!, $facilitiesDescription: String!, $facilitiesImage: String!, $facilitiesLink: String!) {
        mutOrganization(facilities_orderid: $facilitiesOrderid, facilities_title: $facilitiesTitle, facilities_description: $facilitiesDescription, facilities_image: $facilitiesImage, facilities_link: $facilitiesLink) {
          code
          message
        }
      }
    `,
    variables: {
      facilitiesOrderid,
      facilitiesTitle,
      facilitiesDescription,
      facilitiesImage,
      facilitiesLink,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}



// 天文台列表
type resObservatoriesList = {
  data: {
    observatoriesList: ObservatoriesArr
  };
};
export function observatoriesList(pageRouteName: string): Promise<resObservatoriesList> {
  return client.query({
    query: gql`
      query ObservatoriesList {
        observatoriesList {
          observatory_category_name
          observatory_category_id
        }
      }
    `,
    variables: {
      pageRouteName
    },
    fetchPolicy: "no-cache"
  })
}



// 刪除天文台
export function deleteObservatories(observatoryCategoryId: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation DeleteObservatories($observatoryCategoryId: String!) {
        deleteObservatories(observatory_category_id: $observatoryCategoryId) {
          code
          message
        }
      }
    `,
    variables: {
      observatoryCategoryId,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}
