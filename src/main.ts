import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import pinia from './store/createPinia.ts';

// 公共样式
import './assets/style/main.scss';

const app = createApp(App);
app.use(router);
app.use(pinia);

// 挂载
app.mount('#app');
