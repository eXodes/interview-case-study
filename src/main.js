import '@/assets/styles/index.css';
import { FontAwesomeIcon } from '@/plugins/font-awesome';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

createApp(App)
  .use(router)
  .use(createPinia())
  .component('fa', FontAwesomeIcon)
  .mount('#app');
