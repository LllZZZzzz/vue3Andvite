<!--
 * @FilePath: index.vue
 * @Author: lizhuo lizhuo@pwrd.com
 * @Date: 2023-08-29 17:19:32
 * @LastEditors: lizhuo lizhuo@pwrd.com
 * @LastEditTime: 2023-09-01 15:35:26
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { User, Lock, Warning } from '@element-plus/icons-vue';
import useUserStore from '@/store/modules/user';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';
import { getTimes } from '@/utils';
let useStore = useUserStore();
let loading = ref(false);
const $router = useRouter();
const loginForm = reactive({
  username: '',
  password: '',
});
const loginFormDom = ref();
const login = async () => {
  try {
    await loginFormDom.value.validate();
  } catch (error) {
    ElNotification({
      type: 'error',
      message: '表单校验不通过',
    });
    throw new Error('');
  }
  try {
    loading.value = true;
    await useStore.userLogin(loginForm);
    $router.push('/');
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hi,${getTimes()}好`,
    });
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error.message,
    });
  }
  loading.value = false;
};
const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入账号'));
  } else {
    callback();
  }
};

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入密码'));
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'));
  } else {
    callback();
  }
};
const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
};
</script>
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-card class="login_form">
          <h1>HELLO</h1>
          <p>欢迎来到甄选商城</p>
          <el-form :model="loginForm" :rules="rules" ref="loginFormDom">
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                clearable
                v-model="loginForm.username"
                placeholder="Username"
                size="large"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                :prefix-icon="Lock"
                show-password
                size="large"
                placeholder="Password"
                clearable
              ></el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  position: fixed;
  .login_form {
    position: relative;
    width: 55%;
    top: 25vh;
    left: 10vw;
    padding: 10px;
    background: transparent;
    p,
    h1 {
      background: linear-gradient(to right, blue, rgb(35, 60, 70));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      margin-bottom: 20px;
      font-size: 26px;
      font-weight: 700;
    }
    h1 {
      font-size: 40px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 20px;
      margin-top: -10px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
// .el-card {
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
// }
</style>
