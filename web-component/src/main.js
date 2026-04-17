import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './register.js'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
