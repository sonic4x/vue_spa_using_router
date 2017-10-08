import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import Bar from '@/components/Bar'
import AboutMe from '@/components/Aboutme'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    { path: '/aboutme' , component: AboutMe } 
  ]
})
