import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './_pages/app.vue'
import Foo from "./_pages/foo.vue";
import Bar from "./_pages/bar.vue";

const routes = [
  // 全量加载
  { 
    path: '/foo', 
    name: 'foo',
    component: Foo 
  },

  // 按需加载
  { 
    path: '/bar', 
    name: 'bar',
    component: Bar
  },

  { path: '*', redirect: 'foo' }
]

Vue.use(VueRouter)
const router = new VueRouter({ routes })

var app = new Vue({
  el: '#root',
  router,
  render: h => h(App),
  created: function() {}
})