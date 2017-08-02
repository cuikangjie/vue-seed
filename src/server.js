import Vue from 'vue'
import App from './App.vue'

import { createStore } from './store/server'
import { createRouter } from './router/server.js'

import { sync } from 'vuex-router-sync'
// 引入混合
import mixin from './mixins'

import * as filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.mixin(mixin)
// 引入默认样式
import '../static/css/noremall.css';

import ElementUi from 'element-ui'

// 输入框 单选框 按钮
Vue.use(ElementUi)
import '../theme/index.css'

export function createApp () {

  const store = createStore()
  const router = createRouter()

  sync(store, router)


  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
