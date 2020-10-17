import '@/assets/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@/plugins/font-awesome';

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
