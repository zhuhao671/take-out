import Vue from 'vue'
import 'lib-flexible/flexible'

import App from './App.vue'
import router from "./router"
import Header from './components/Header/Header.vue'

Vue.component('Header', Header)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
}).$mount('#app')
