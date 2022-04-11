import client from '../apollo'
import gql from 'graphql-tag';
import { FacilitiesArr, ObservatoriesArr } from '../types/graphql/types'

// 設施列表
type resFacilities = {
  data: {
    facilitiesList: FacilitiesArr;
  };
};
export function facilitiesList(): Promise<resFacilities> {
  return client.query({
    query: gql`
      query Query {
        facilitiesList {
          facilities_title
          facilities_description
          facilities_image
          facilities_link
        }
      }
    `
  })
}

// 天文台列表
type resObservatories = {
  data: {
    observatoriesList: ObservatoriesArr;
  };
};
export function observatoriesList(): Promise<resObservatories> {
  return client.query({
    query: gql`
      query Query {
        observatoriesList {
          observatory_category_name
          observatory_category_id
          observatory_post_content
        }
      }
    `
  })
}