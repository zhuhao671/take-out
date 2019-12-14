import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'



//声明
Vue.use(VueRouter)

export default new VueRouter({
  mode:"history",

  routes
})