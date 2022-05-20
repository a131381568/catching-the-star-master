export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type File = {
  filename: string
  mimetype: string
  encoding: string
  s3Path: string
  errorTitle: string
};

export type AboutInfo = {
  visual: string
  slogan: string
  philosophy: string
  quote: string
  epilogue: string
};

export type SinglePageInfo = {
  page_title: string;
  sub_page_title: string;
  page_route: string;
};

export type ArtistsCategory = {
  post_category_name: string
  post_category_id: string
};

export type ArtistsCategories = {
  post_category_name: string;
  post_category_id: string;
}[];

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
  hasNextPage: boolean
  hasPreviousPage: boolean
  start: number
  end: number
  totalPagi: number
}

export type FacilitiesArr = {
  facilities_orderid: number
  facilities_title: string
  facilities_description: string
  facilities_image: string
  facilities_link: string
}[]

export type Facility = {
  facilities_orderid: number
  facilities_title: string
  facilities_description: string
  facilities_image: string
  facilities_link: string
}

export type ObservatoriesArr = {
  observatory_category_name: string
  observatory_category_id: string
  observatory_post_content: string
}[]

export type Observatory = {
  observatory_category_name: string
  observatory_category_id: string
  observatory_post_content: string
}

export type Stargazing = {
  stargazing_title: string
  stargazing_latitude: number
  stargazing_longitude: number
  stargazing_image: string
  stargazing_description: string
  stargazing_address: string
  stargazing_link: string
  stargazing_lid: string
  published: boolean
}

export type StargazingArr = {
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