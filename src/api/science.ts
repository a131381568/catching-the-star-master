import client from '../apollo'
import gql from 'graphql-tag';
import { Post, PostList, ArtistsCategory } from '../types/graphql/types'


// 文章列表
type resPostList = {
  data: {
    artists: PostList;
  };
};
export function getPostList(
  first: Number | null,
  last: Number | null,
  after: Number | null,
  before: Number | null,
  categoryid: String | ""
): Promise<resPostList> {
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
    }`,
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
    getSinglePost: Post;
  };
};
export function getSinglePostById(postid: Number): Promise<resSinglePost> {
  return client.query({
    query: gql`
      query Query($postid: Int!) {
        getSinglePost(postid: $postid) {
          postid
          content
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