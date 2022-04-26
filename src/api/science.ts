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
export function artistsCategories(pageRouteName: string, cacheMode: boolean): Promise<resPostCategories> {
  // let cacheName = "no-cache"
  // if (cacheMode === true) {
  //   cacheName = "cache-first"
  // }
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
    },
    fetchPolicy: cacheMode ? "cache-first" : "no-cache"
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


// 新增文章分類
export function setNewCategory(categoryName: string, categoryId: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation SetNewCategory($categoryName: String!, $categoryId: String!) {
        setNewCategory(categoryName: $categoryName, categoryId: $categoryId) {
          code
          message
        }
      }
    `,
    variables: {
      categoryName,
      categoryId,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 刪除文章分類
export function deleteCategory(categoryId: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation DeleteCategory($categoryId: String!) {
        deleteCategory(categoryId: $categoryId) {
          code
          message
        }
      }
    `,
    variables: {
      categoryId,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 編輯文章分類
export function mutCategory(categoryName: string, categoryId: string, pageRouteName: string) {
  return client.mutate({
    mutation: gql`
      mutation MutCategory($categoryName: String!, $categoryId: String!) {
        mutCategory(categoryName: $categoryName, categoryId: $categoryId) {
          code
          message
        }
      }
    `,
    variables: {
      categoryName,
      categoryId,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 依 ID 查詢單一分類
type resPostCategory = {
  data: {
    getSingleCategory: ArtistsCategory;
  };
};
export function getSingleCategory(categoryId: string, pageRouteName: string): Promise<resPostCategory> {
  return client.query({
    query: gql`
      query GetSingleCategory($categoryId: String!) {
        getSingleCategory(categoryId: $categoryId) {
          post_category_name
          post_category_id
        }
      }
    `,
    variables: {
      categoryId,
      pageRouteName
    },
    fetchPolicy: "no-cache"
  })
}


// 文章列表 ( 分頁 )
type resArtistsPagi = {
  data: {
    artistsPagi: ArtistsList;
  };
};
export function artistsPagi(
  pageNumber: Number | null,
  linesPerpage: Number | null,
  pageRouteName: string
): Promise<resArtistsPagi> {
  return client.query({
    query: gql`
      query ArtistsPagi($pageNumber: Int, $linesPerpage: Int) {
        artistsPagi(pageNumber: $pageNumber, linesPerpage: $linesPerpage) {
          edges {
            postid
            title
            categoryid
            updatetime
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


// 新增單一文章
export function SetNewPost(
  postid: number,
  title: string,
  categoryid: string,
  updatetime: string,
  content: string,
  image: string,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation SetNewPost($postid: Int, $title: String, $categoryid: String, $updatetime: String, $content: String, $image: String) {
        setNewPost(postid: $postid, title: $title, categoryid: $categoryid, updatetime: $updatetime, content: $content, image: $image) {
          code
          message
        }
      }
    `,
    variables: {
      postid,
      title,
      categoryid,
      updatetime,
      content,
      image,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 刪除單一文章
export function deletePost(
  postid: number,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation DeletePost($postid: Int) {
        deletePost(postid: $postid) {
          code
          message
        }
      }
    `,
    variables: {
      postid,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}