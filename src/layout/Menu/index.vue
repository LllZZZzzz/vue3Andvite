<!--
 * @FilePath: index.vue
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-09-04 19:47:52
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-04 20:33:04
-->
<script lang="ts" setup name="Menu">
import { useRouter } from 'vue-router';
defineOptions({
  name: 'Menu',
});
defineProps(['menuList']);
let $router = useRouter();
const goRoute = (vc) => {
  $router.push(vc.index);
};
</script>
<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta?.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta?.icon"></component>
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        v-if="!item.children[0].meta?.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta?.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且大于一个 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
