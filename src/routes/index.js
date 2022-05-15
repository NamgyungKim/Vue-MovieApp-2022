import { createRouter, createWebHashHistory } from 'vue-router' 
import Home from './Home'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior:()=>({ top: 0 })
  ,
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})