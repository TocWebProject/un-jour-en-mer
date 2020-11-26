import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import 'bootstrap'
import './assets/css/custom.scss'


const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      return { left: 0, top: 0 };
    }
} 

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
          },
          {
            path: '/blog',
            name: 'Blog',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "blog" */ './components/Blog.vue'),
        
          },
          {
            path: '/faq',
            name: 'Faq',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "faq" */ './components/Faq.vue'),
        
          },
          {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: () => import(/* webpackChunkName: "faq" */ './components/404.vue'),
            meta: {
              requiresAuth: false
            }
          }
    ],
    scrollBehavior,
  })

createApp(App).use(router).mount('#app')

