import client from '../apollo'
import gql from 'graphql-tag';
import { AboutInfo } from '../types/graphql/types'

// 文章分類
type resAboutInfo = {
  data: {
    aboutInfo: AboutInfo;
  };
};
export function aboutInfo(): Promise<resAboutInfo> {
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
    `
  })
}