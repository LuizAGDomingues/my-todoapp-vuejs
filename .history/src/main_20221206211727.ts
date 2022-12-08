import { createApp } from 'vue'
import App from './components/'
import './sass/style.css'
import store from './store'


createApp(App).use(store).mount('#app')
