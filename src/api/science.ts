import client from '../apollo'
import gql from 'graphql-tag';
import { Artists, ArtistsList, ArtistsCategory } from '../types/graphql/types'


// 文章列表 ( 分類 )
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
  categoryid: String | "",
  pageRouteName: string
): Promise<resArtistsList> {
  return client.query({
    query: gql`
      query Artists(
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
      categoryid,
      pageRouteName
    }
  })
}


// 單一文章
type resSinglePost = {
  data: {
    getSinglePost: Artists;
  };
};
export function getSinglePostById(postid: Number, pageRouteName: string): Promise<resSinglePost> {
  return client.query({
    query: gql`
      query GetSinglePost($postid: Int!) {
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
      postid,
      pageRouteName
    }
  })
}


// 文章分類對照表
type resPostCategories = {
  data: {
    artistsCategories: [ArtistsCategory];
  };
};
export function artistsCategories(pageRouteName: string): Promise<resPostCategories> {
  return client.query({
    query: gql`
      query ArtistsCategories {
        artistsCategories {
          post_category_name
          post_category_id
        }
      }
    `,
    variables: {
      pageRouteName
    }
  })
}


// 文章列表 ( 搜尋 )
type resSearchArtists = {
  data: {
    searchArtists: ArtistsList;
  };
};
export function getSearchArtists(
  first: Number | null,
  last: Number | null,
  after: Number | null,
  before: Number | null,
  keyword: String | "",
  pageRouteName: string
): Promise<resSearchArtists> {
  return client.query({
    query: gql`
      query SearchArtists(
        $first: Int,
        $last: Int,
        $after: Int,
        $before: Int,
        $keyword: String
      ) {
        searchArtists(first:$first, last: $last, after: $after, before: $before, keyword: $keyword) {
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
      keyword,
      pageRouteName
    }
  })
}
