import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'homeTab',
      component: () => import( /* webpackChunkName: "tabs" */ './views/tabs/Home.vue')
    },
    {
      path: '/apps',
      name: 'appsTab',
      component: () => import( /* webpackChunkName: "tabs" */ './views/tabs/Apps.vue')
    },

    {
      path: '/orders',
      name: 'ordersTab',
      component: () => import( /* webpackChunkName: "tabs" */ './views/tabs/Orders.vue')
    },


    {
      path: '/mine',
      name: 'mineTab',
      component: () => import( /* webpackChunkName: "tabs" */ './views/tabs/Mine.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})