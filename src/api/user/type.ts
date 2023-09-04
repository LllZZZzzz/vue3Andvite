/*
 * @FilePath: type.ts
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-08-29 10:55:03
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-08-31 19:33:36
 */
export interface LoginFormData {
  username?: string;
  password?: string;
}
export interface ResponseData {
  code?: number;
  message?: string;
  ok?: boolean;
}
interface dataType {
  token?: string;
}
interface user {
  routes: string[];
  buttons: string[];
  roles: string[];
  name: string;
  avatar: string;
}
export interface LoginResponseData extends ResponseData {
  data: dataType;
}
export interface userInfoResponseData extends ResponseData {
  data: user;
}
