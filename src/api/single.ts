import client from '../apollo'
import gql from 'graphql-tag';
import { Post } from '../types/graphql/types'

type resPost = {
  data: {
    getSinglePost: Post;
  };
};

export function getSinglePostById(postid: number): Promise<resPost> {
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


///////////////////


// type resPost = {
//   data: {
//     titlexxx: Post;
//   };
// };

// export function getSinglePostById(): Promise<resPost> {
//   return client.query({
//     query: gql`
//       query {
//         getTest {
//           title
//         }
//       }`
//   })
// }