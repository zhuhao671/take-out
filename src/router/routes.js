import MSite from '@/pages/MSite/MSite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
import Login from '@/pages/Login/Login'
import Shop from '@/pages/Shop/Shop'
import Goods from '@/pages/Shop/Goods'
import Ratings from '@/pages/Shop/Ratings'
import Info from '@/pages/Shop/Info'


export default [
  {
    path:'/msite',
    component: MSite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/order',
    component: Order,
    meta:{
      isShowFooter:true
    }
  },
  
  {
    path:'/profile',
    component: Profile,
    meta:{
      isShowFooter:true
    }
  },

  {
    path:'/search',
    component: Search,
    meta:{
      isShowFooter:true
    }
  },
  
  {
    path:'/login',
    component: Login
  },

  {
    path:'/shop',
    component: Shop,
    children:[
      {
        path:'/shop/goods',
        component: Goods
      },
    
      {
        path:'/shop/ratings',
        component: Ratings
      },
    
      {
        path:'/shop/info',
        component: Info
      },
      { //默认为点击时选中首页路由
        path:'',
        redirect:'/shop/goods'   
      }
    ]
  },

  { //默认为点击时选中首页路由
    path:'/',
    redirect:'/login'   
  }
]