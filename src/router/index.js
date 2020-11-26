import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import LayOut from '@/views/LayOut'
import login from '@/views/LayOut'
import register from '@/views/register'

// 公共路由
export const constantRoutes = [
  {
    path: '/LayOut',
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
