/*
 * @FilePath: index.ts
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-08-23 19:44:39
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-04 14:10:38
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */
import type { App } from 'vue';
import SvgIcon from './SvgIcon.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const globalComponents = { SvgIcon };
export default {
  install(app: App) {
    for (const [key, component] of Object.entries(globalComponents)) {
      app.component(key, component);
    }
    // 这里注册所有的全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
