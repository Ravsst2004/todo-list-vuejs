import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Tailwind css
import './assets/css/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
