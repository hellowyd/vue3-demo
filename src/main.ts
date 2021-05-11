import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import './config/rem'
import 'normalize.css/normalize.css'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vant)
app.mount('#app')
