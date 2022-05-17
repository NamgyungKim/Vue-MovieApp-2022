import { createRouter, createWebHashHistory } from 'vue-router' 
import Home from './Home'
import Movies from './Movies'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior:()=>({ top: 0 })
  ,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/search/:word',
      component: Movies
    },
    {
      path: '/:notfound(.*)',
      component: NotFound
    }
  ]
})