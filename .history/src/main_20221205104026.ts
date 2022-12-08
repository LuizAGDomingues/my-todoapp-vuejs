import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './sass/main.css'

createApp(App).use(store).mount('#app')
