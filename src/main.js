import Vue from 'vue'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'

import App from './App.vue'
import router from "./router"
import Header from './components/Header/Header'
import Star from './components/Star/Star'
import store from './vuex/store'
import './validate'
import * as API from '@/api'
import i18n from './i18n'
import './mock/mock-serve'

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
  router,

  i18n,
  store
}).$mount('#app')
