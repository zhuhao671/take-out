import Vue from 'vue'
import 'lib-flexible/flexible'

import App from './App.vue'
import router from "./router"
import Header from './components/Header/Header'
import Star from './components/Star/Star'
import store from './vuex/store'
import './validate'
import * as API from '@/api'

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API

Vue.component('Header', Header)
Vue.component('Star', Star)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  
  // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
  router,
  store,
}).$mount('#app')
