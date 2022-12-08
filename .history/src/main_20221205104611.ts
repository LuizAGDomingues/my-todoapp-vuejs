import { createApp } from 'vue'
import store from './store'
import './sass/style.css'
import App from './App'


createApp(App).use(store).mount('#app')
