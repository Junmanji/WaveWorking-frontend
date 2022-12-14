import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from '@/router/router.js';
import i18n from '@/i18n/i18n.js';
// import './global.css';

createApp(App).use(router).use(i18n).mount('#app');
