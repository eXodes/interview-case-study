import '@/assets/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@/plugins/font-awesome';
import store from './store';

createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
