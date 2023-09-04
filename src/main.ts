import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'element-plus/dist/index.css';
// svg插件需要配置代码
import 'virtual:svg-icons-register';
import App from '@/App.vue';
import globalComponent from './components';
import './styles/index.scss';
import router from './router';
import pinia from '@/store';
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponent);
app.use(router);
app.use(pinia);
app.mount('#app');
