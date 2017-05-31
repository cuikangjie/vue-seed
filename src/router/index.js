import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const one = r => require.ensure([], () => r(require('../view/one.vue')), 'one')
const two = r => require.ensure([], () => r(require('../view/two.vue')), 'two')

export default new VueRouter({
  routes: [
    {path: '/', redirect: '/one' },
    {path:'/one', component: one},
    {path: '/two/:id', component: two}
  ]
});
