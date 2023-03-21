import { createApp } from 'vue'
import 'bootstrap'
import {router} from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
