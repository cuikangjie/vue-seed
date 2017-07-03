import Vue from 'vue'
import App from './App.vue'

import { createStore } from './store'
import { createRouter } from './router'

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
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
// new Vue({
//     el: '#app',
//     render: h => h(App),
//     store,
//     router
// })
