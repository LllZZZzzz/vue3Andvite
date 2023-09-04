/*
 * @FilePath: types.ts
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-08-31 19:21:37
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-04 20:04:53
 */
import type { RouteRecordRaw } from 'vue-router';

export interface UserState {
  token: string | null;
  menuRoutes: RouteRecordRaw[];
}
