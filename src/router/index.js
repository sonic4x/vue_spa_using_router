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
      components: {
        default: HelloWorld,
        view1: Bar
      }
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    { path: '/aboutme' , component: AboutMe }, //Fetching data before switching route
    { path: '/menu/:id', name: 'menu', component: Menu }, // note the name is case-sensitive
  ]
})
