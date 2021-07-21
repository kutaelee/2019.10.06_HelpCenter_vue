import Vue from 'vue'
import VueRouter from 'vue-router'
import  App  from './components/App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { home } from './components/home.vue';
import { app2 } from './components/App2.vue';

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)


const routes = [
  { path: '/app', component: home },
  { path: '/app2', component: app2 },
  
]

const router = new VueRouter({
  mode: 'history',
  routes // `routes: routes`의 줄임
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')