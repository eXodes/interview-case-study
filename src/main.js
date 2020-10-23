import '@/assets/styles/index.css';
import { FontAwesomeIcon } from '@/plugins/font-awesome';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

createApp(App)
  .use(router)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
