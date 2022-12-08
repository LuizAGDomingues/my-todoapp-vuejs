import { createApp } from 'vue'
import app from './components/App.vue'
import './sass/style.css'
import store from './store'


createApp(app).use(store).mount('#app')
