import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import LayOut from '@/views/LayOut'
import login from '@/views/productList'
import register from '@/views/register'
import productList from '@/views/productList'

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    name: 'LayOut',
    component: LayOut
  },  
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/productList',
    name: 'productList',
    component: productList
  },
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
/* 部署使用*/
// export default new Router({
//   mode: 'hash', // 去掉url中的#
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes
// })
