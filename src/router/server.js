import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter);

function getRouter(name) {
    return () => import(`../view/server/${name}.vue`)
}


export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/one' },
      {path:'/one', component: getRouter('one')},
      {path: '/two/:id', component: getRouter('two')}
    ]
  })
}
