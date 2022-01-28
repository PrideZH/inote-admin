import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router/index';
import store from './store';
import { createApp } from 'vue';

const app = createApp(App);

app.use(ElementPlus, { size: 'small' });
app.use(router);
app.use(store);

app.mount('#app');
