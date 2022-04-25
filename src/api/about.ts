import client from '../apollo'
import gql from 'graphql-tag';
import { AboutInfo, SinglePageInfo } from '../types/graphql/types'

// 文章分類
type resAboutInfo = {
  data: {
    aboutInfo: AboutInfo;
  };
};
export function aboutInfo(pageRouteName: string): Promise<resAboutInfo> {
  return client.query({
    query: gql`
      query AboutInfo {
        aboutInfo {
          visual
          slogan
          philosophy
          quote
          epilogue
        }
      }
    `,
    variables: {
      pageRouteName
    }
  })
}

// 標語管理初始資料
type resSloganLoad = {
  data: {
    aboutInfo: AboutInfo,
    pageInfo: [SinglePageInfo]
  };
};
export function sloganLoad(pageRouteName: string): Promise<resSloganLoad> {
  return client.query({
    query: gql`
      query SloganLoad {
        aboutInfo {
          visual
          slogan
          philosophy
          quote
          epilogue
        }
        pageInfo {
          page_title
          sub_page_title
          page_route
        }
      }
    `,
    variables: {
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}

// 僅更新首頁標語
export function editHomeSlogan(
  pageTitle: string,
  pageSubTitle: string,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation EditHomeSlogan($pageTitle: String!, $pageSubTitle: String!) {
        editHomeSlogan(pageTitle: $pageTitle, pageSubTitle: $pageSubTitle) {
          code
          message
        }
      }
    `,
    variables: {
      pageTitle,
      pageSubTitle,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 僅更新關於我們理念區塊
export function mutAboutSlogan(
  sloganRef: string,
  philosophyRef: string,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation MutAboutSlogan($sloganRef: String!, $philosophyRef: String!) {
        mutAboutSlogan(sloganRef: $sloganRef, philosophyRef: $philosophyRef) {
          code
          message
        }
      }
    `,
    variables: {
      sloganRef,
      philosophyRef,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 僅更新關於我們引言區塊
export function mutAboutQuote(
  quoteRef: string,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation MutAboutQuote($quoteRef: String!) {
        mutAboutQuote(quoteRef: $quoteRef) {
          code
          message
        }
      }
    `,
    variables: {
      quoteRef,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}


// 僅更新關於我們結語區塊
export function mutAboutEpilogue(
  epilogueRef: string,
  pageRouteName: string
) {
  return client.mutate({
    mutation: gql`
      mutation MutAboutEpilogue($epilogueRef: String!) {
        mutAboutEpilogue(epilogueRef: $epilogueRef) {
          code
          message
        }
      }
    `,
    variables: {
      epilogueRef,
      pageRouteName
    },
    fetchPolicy: 'no-cache'
  })
}