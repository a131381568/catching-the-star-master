export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type File = {
  filename: String
  mimetype: String
  encoding: String
  s3Path: String
  errorTitle: String
}

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
  postid: number
  content: string
  title: string
  categoryid: string
  updatetime: string
  description: string
  image: string
};

export type ArtistsArr = {
  postid: number
  content: string
  title: string
  categoryid: string
  updatetime: string
  description: string
  image: string
}[];

export type ArtistConnectionPush = {
  edges: [Artists]
  pageInfo: PageInfoPush
}

export type ArtistsList = {
  edges: [Artists]
  pageInfo: PageInfo
};

export type PageInfo = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  start: number | null
  end: number | null
};

export type PageInfoPush = {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  start: number
  end: number
  totalPagi: number
}

export type FacilitiesArr = {
  facilities_orderid: number
  facilities_title: String
  facilities_description: String
  facilities_image: String
  facilities_link: String
}[]

export type Facility = {
  facilities_orderid: number
  facilities_title: String
  facilities_description: String
  facilities_image: String
  facilities_link: String
}

export type ObservatoriesArr = {
  observatory_category_name: String
  observatory_category_id: String
  observatory_post_content: String
}[]

export type Observatory = {
  observatory_category_name: String
  observatory_category_id: String
  observatory_post_content: String
}

export type Stargazing = {
  stargazing_title: String
  stargazing_latitude: number
  stargazing_longitude: number
  stargazing_image: String
  stargazing_description: String
  stargazing_address: String
  stargazing_link: String
  stargazing_lid: String
  published: Boolean
}

export type StargazingArr = {
  stargazing_title: String
  stargazing_latitude: number
  stargazing_longitude: number
  stargazing_image: String
  stargazing_description: String
  stargazing_address: String
  stargazing_link: String
  stargazing_lid: String
  published: Boolean
}[];

export type StargazingConnectionPush = {
  edges: [Stargazing]
  pageInfo: PageInfoPush
}

// 新增編輯回傳格式
export type CommonResponse = {
  code: number
  message: string
}

// map
export type coordinate = {
  stargazing_title: string
  stargazing_latitude: number
  stargazing_longitude: number
  stargazing_image: string
  stargazing_description: string
  stargazing_address: string
  stargazing_link: string
}

export type stargazingListArr = {
  stargazing_title: string
  stargazing_latitude: number
  stargazing_longitude: number
  stargazing_image: string
  stargazing_description: string
  stargazing_address: string
  stargazing_link: string
  stargazing_lid: string
  published: boolean
}[];

export type markType = {
  stargazing_title: string,
  stargazing_latitude: number,
  stargazing_longitude: number,
  stargazing_image: string,
  stargazing_description: string,
  stargazing_address: string,
  stargazing_link: string
}

export type layerClickEvent = {
  latlng: {
    lat: number,
    lng: number,
  },
  layer: {
    setIcon(n: object): {}
  }
}

export type layerArr = {
  dragging: object,
  options: object,
  _eventParents: object,
  _events: object,
  _icon: object,
  _initHooksCalled: boolean,
  _latlng: string,
  _leaflet_id: number,
  _map: object,
  _mapToAdd: object,
  _shadow: null,
  _zIndex: number,
  _zoomAnimated: boolean,
  setIcon: (n: object) => true,
  getLatLng: () => { lat: null, lng: null },
}[];

export type popLayer = {
  options: object,
  _closeButton: object,
  _container: object,
  _containerBottom: number,
  _containerLeft: number,
  _containerWidth: number,
  _content: string,
  _contentNode: object,
  _events: object,
  _firingCount: number,
  _initHooksCalled: boolean,
  _latlng: object,
  _leaflet_id: number,
  _map: null,
  _mapToAdd: null,
  _removeTimeout: number,
  _source: undefined,
  _tip: object,
  _tipContainer: object,
  _wrapper: object,
  _zoomAnimated: boolean,
}