/*
 * @FilePath: index.ts
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-08-29 10:55:16
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-08-29 11:07:50
 */
import request from '@/utils/request';
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from './type';
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data);

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL);
