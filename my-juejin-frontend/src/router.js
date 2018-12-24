import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/user',
      name: 'user-home',
      component: () => import(/* webpackChunkName: "about" */ './views/user/home.vue'),
      children: [
        {
          path: 'list/:type',
          name: 'pins',
          component: () => import(/* webpackChunkName: "about" */ './components/list.vue')
        },
      ]
    }, {
      path: '/active',
      name: 'active',
      component: () => import(/* webpackChunkName: "about" */ './views/active.vue')
    },{
      path: '/user/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "about" */ './views/user/setting.vue'),
    },{
      path: '/detail/:id',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ './views/detail.vue')
    }

  ]
})
