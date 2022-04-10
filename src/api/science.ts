import client from '../apollo'
import gql from 'graphql-tag';
import { Artists, ArtistsList, ArtistsCategory } from '../types/graphql/types'


// 文章列表
type resArtistsList = {
  data: {
    artists: ArtistsList;
  };
};
export function getArtistsList(
  first: Number | null,
  last: Number | null,
  after: Number | null,
  before: Number | null,
  categoryid: String | ""
): Promise<resArtistsList> {
  return client.query({
    query: gql`
      query Query(
        $first: Int,
        $last: Int,
        $after: Int,
        $before: Int,
        $categoryid: String
      ) {
        artists(first:$first, last: $last, after: $after, before: $before, categoryid: $categoryid) {
          edges {
            postid
            title
            categoryid
            updatetime
            content
            description
            image
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            start
            end
          }
        }
      }
    `,
    variables: {
      first,
      last,
      after,
      before,
      categoryid
    }
  })
}


// 單一文章
type resSinglePost = {
  data: {
    getSinglePost: Artists;
  };
};
export function getSinglePostById(postid: Number): Promise<resSinglePost> {
  return client.query({
    query: gql`
      query Query($postid: Int!) {
        getSinglePost(postid: $postid) {
          postid
          content
          title
          categoryid
          updatetime
          image
        }
      }`,
    variables: {
      postid
    },
  })
}


// 文章分類
type resPostCategories = {
  data: {
    artistsCategories: [ArtistsCategory];
  };
};
export function artistsCategories(): Promise<resPostCategories> {
  return client.query({
    query: gql`
      query Query {
        artistsCategories {
          post_category_name
          post_category_id
        }
      }
    `
  })
}