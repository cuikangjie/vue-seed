import Vue from 'vue';
import VueRouter from 'vue-router'
import One from '../view/one.vue';
import Two from '../view/two.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: '/', redirect: '/one' },
    {path:'/one', component: One},
    {path: '/two/:id', component: Two}
  ]
});
