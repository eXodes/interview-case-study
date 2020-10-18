import '@/assets/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@/plugins/font-awesome';
import store from './store';
import router from './router';

createApp(App)
  .use(router)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
