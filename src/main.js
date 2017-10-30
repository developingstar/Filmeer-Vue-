import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {Tabs, Tab} from 'vue-tabs-component';

Vue.use(VueRouter)
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

import Hello from './components/Hello'
import About from './components/About'
import FilmeerHomeMain from './components/filmeer/home/filmeer_home_main'
import FilmeerAdsCampaigns from './components/filmeer/ads/filmeer_ads_campaigns'
const routes = [
	{ path: '/', component: FilmeerHomeMain },
  { path: '/about', component: About },
  { path: '/filmeer/home/main', component: FilmeerHomeMain },
  { path: '/filmeer/ads/campaigns', component: FilmeerAdsCampaigns }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')//mount the router on the app
