import Vue from 'vue'
import Router from 'vue-router'
//import Login from '@/components/login/Login'
//import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../components/login/Login.vue'],resolve)
    },
	{
		path: '/main',
		name: 'main',
		component: resolve => require(['../components/Main.vue'],resolve),
		children: [
		   {
			   path: '/',
			   name: 'orderList',
			   component: resolve => require(['../components/orderList/OrderList.vue'],resolve)
		   }
		]
	},
	{ path: '*', redirect: '/login'}
  ]
})
