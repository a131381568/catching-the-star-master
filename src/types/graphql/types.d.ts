export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */

export type Post = {
  postid: number;
  content: string;
  title: string;
  categoryid: string;
  updatetime: string;
  description: string;
  image: string;
};

export type PostArr = {
  postid: number;
  content: string;
  title: string;
  categoryid: string;
  updatetime: string;
  description: string;
  image: string;
}[];

export type PostList = {
  edges: [Post]
  pageInfo: PageInfo
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  start: number;
  end: number;
};


export type QueryPostListArgs = {
  first: number | null;
  last: number | null;
  after: number | null;
  before: number | null;
  categoryid: string | "";
}


export type QueryPostArgs = {
  postid: number;
}


/////////////////////////////

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  postid: Scalars['Int'];
};

export type Feed = {
  __typename?: 'Feed';
  content: Scalars['String'];
  postid: Scalars['Int'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  feed: Feed;
};


export type QueryCommentArgs = {
  postid: Scalars['Int'];
};


export type QueryFeedArgs = {
  postid: Scalars['Int'];
};