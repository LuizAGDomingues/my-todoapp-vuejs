import { createApp } from 'vue'
import App from './App.vue'
import './sass/style.css'
import store from './store'
import VueCookies from 'vue-cookies';


createApp(App).use(store).use(VueCookies).mount('#app')
