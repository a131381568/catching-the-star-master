export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */

export type AboutInfo = {
  visual: String
  slogan: String
  philosophy: String
  quote: String
  epilogue: String
}

export type SinglePageInfo = {
  page_title: String
  sub_page_title: String
  page_route: String
}

export type ArtistsCategory = {
  post_category_name: String
  post_category_id: String
}

export type ArtistsCategories = {
  post_category_name: String
  post_category_id: String
}[]

export type Artists = {
  postid: number;
  content: string;
  title: string;
  categoryid: string;
  updatetime: string;
  description: string;
  image: string;
};

export type ArtistsArr = {
  postid: number;
  content: string;
  title: string;
  categoryid: string;
  updatetime: string;
  description: string;
  image: string;
}[];

export type ArtistsList = {
  edges: [Artists]
  pageInfo: PageInfo
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  start: number;
  end: number;
};
