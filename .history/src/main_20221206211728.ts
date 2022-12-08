import { createApp } from 'vue'
import App from './components/App.vue'
import './sass/style.css'
import store from './store'


createApp(App).use(store).mount('#app')
