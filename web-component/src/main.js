import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './register.js'
import { createNaiveUi } from 'naive-ui'

const naive = createNaiveUi()
const app = createApp(App)
app.use(naive)
app.mount('#app')
