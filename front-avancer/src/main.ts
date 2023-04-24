import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router'
import App from './App.vue'

const pina = createPinia()

createApp(App)
    .use(router)
    .use(pina)
    .mount('#app')
