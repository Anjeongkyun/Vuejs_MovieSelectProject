import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'

createApp(App)
    .use(router) // use : 플러그인 연결
    .mount('#app')
