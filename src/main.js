import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { pinia } from './store'
import './assets/scss/app.scss'
import 'nprogress/nprogress.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
