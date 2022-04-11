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
export function facilitiesData(): Promise<resFacilities> {
  return client.query({
    query: gql`
      query Query {
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
    `
  })
}
