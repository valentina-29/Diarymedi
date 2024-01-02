import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);
// import css
import './assets/css/app.css'

// import router
import router from './router'

const app = createApp(App)
  app.use(router)
  app.mount('#app')
  app.component('font-awesome-icon', FontAwesomeIcon);
