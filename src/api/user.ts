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

export const reqbin = (): AxiosPromise<ResponseData> => {
  return axios.request({
    url: 'https://reqbin.com/echo/get/json',
    method: 'GET'
  })
}

