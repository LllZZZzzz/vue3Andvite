/*
 * @FilePath: user.ts
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-08-31 11:31:44
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-04 20:04:32
 */
import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user/index';
import { UserState } from './types/types';
import { LoginFormData, LoginResponseData } from '@/api/user/type';
import { constantRoute } from '@/router/routers';

export default defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'),
      menuRoutes: constantRoute,
    };
  },
  actions: {
    async userLogin(data: LoginFormData) {
      const res: LoginResponseData = await reqLogin(data);
      if (res.code == 200) {
        const token = res.data.token as string;
        this.token = token;
        localStorage.setItem('TOKEN', token);
        return res.data;
      } else {
        return Promise.reject(res.data);
      }
    },
  },
  getters: {},
});
