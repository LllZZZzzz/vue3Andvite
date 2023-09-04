<!--
 * @FilePath: index.vue
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-09-01 17:34:16
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-04 14:19:22
-->
<script lang="ts" setup name="Logo">
import setting from '../setting.ts';
defineOptions({
  name: 'Logo',
});
</script>
<script lang="ts"></script>
<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <span class="title">{{ setting.title }}</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  width: 95%;
  display: flex;
  align-items: center;
  height: $base-menu-logo-height;
  color: #959ea6;
  font-weight: 700;
  font-size: $base-logo-title-fontSize;
  flex-wrap: nowrap;
  overflow: hidden;
  padding-left: 17px;
  img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .title {
    display: inline-block;
    height: 32px;
    margin: 2px 0 0 18px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
