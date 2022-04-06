import axios, { ResponseData } from './index'
import { AxiosPromise } from 'axios'
interface LoginReqArguInterface {
  user_name: string;
  password: number | string
}
export const loginReq = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/api/user/login',
    data,
    method: 'GET'
  })
}

export const questions = (): AxiosPromise<ResponseData> => {
  return axios.request({
    url: 'https://private-e3d59-hbrtaiwanapi.apiary-mock.com/questionsxx',
    method: 'GET'
  })
}

export const markContent = (): AxiosPromise<ResponseData> => {
  return axios.request({
    url: 'http://localhost:4000/graphql',
    method: 'POST',
    data: {
      query: `query {
        getSinglePost(postid: 4816) {
          content
        }
      }`
    }
  })
}

export const artistsPagi = (): AxiosPromise<ResponseData> => {
  return axios.request({
    url: 'http://localhost:4000/graphql',
    method: 'POST',
    data: {
      query: `query {
              artists(first: 9) {
                edges {
                  postid
                  title
                  categoryid
                  updatetime
                  description
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                  start
                  end
                }
              }
            }`
    }
  })
}


