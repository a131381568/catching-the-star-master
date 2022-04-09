import client from '../apollo'
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable'
import { Post, PostList, QueryPostListArgs } from '../types/graphql/types'

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


type resPostList = {
  data: {
    artists: PostList;
  };
};

const FEED_QUERY = gql`
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
  }`

export function getPostList(
  first: Number | null,
  last: Number | null,
  after: Number | null,
  before: Number | null,
  categoryid: String | ""
): Promise<resPostList> {
  return client.query({
    query: FEED_QUERY,
    variables: {
      first,
      last,
      after,
      before,
      categoryid
    }
  })
}
