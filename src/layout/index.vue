<!--
 * @FilePath: index.vue
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-09-01 17:24:28
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-04 20:54:25
-->
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Logo from './logo';
import useUserStore from '@/store/modules/user.ts';
import Menu from './Menu';
const userStore = useUserStore();
const $route = useRoute();
</script>
<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px" class="elAside">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          active-text-color="#fff"
          background-color="#001529"
          text-color="#959ea6"
          :default-active="$route.path"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container class="container">
      <el-main
        :style="{
          left: '200px',
          width: 'calc(100% - 200px)',
        }"
      >
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.layout-container-demo {
  height: 100%;
  .elAside {
    background-color: #001529;
    .scrollbar {
      height: calc(100% - 50px);
    }
  }
}
</style>
