import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import createRouter from './router'

import './styles/index.less'

Vue.use(VueRouter)

export default () => {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}

