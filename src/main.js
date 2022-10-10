import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(Vue)
app.use(store)
app.use(Vuex)
app.mount('#app')


