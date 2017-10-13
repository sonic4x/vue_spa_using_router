import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import Bar from '@/components/Bar'
import AboutMe from '@/components/Aboutme'
import NotFound from '@/components/NotFound'

import '../css/nprogress.css'
var NProgressMod = require('../utils/nprogress');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {          //having more than one router-view
        default: HelloWorld,
        view1: Bar
      }
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar,
      alias: '/abar',         //use alias
    },
    {
      path: '/aboutme',
      component: AboutMe,    //Fetching data before switching route
      //beforeEnter: (to, from, next) => {   //per-route guard
      //  NProgress.start()
      //  next()
      //}
    },
    {
      path: '/menu/:id',
      name: 'menu',         // note the name is case-sensitive
      component: Menu
    },

    /*-------------------------
    redirect
    ---------------------------*/
    {
      path: '/shoe',
      redirect: {
        name: 'Bar'
      }
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/shirts/:size?',    // for example, http://localhost:8080/#/shirts/30,  the params.size = 30
      redirect: to => {
        const { hash, params, query } = to
        if (query.colour === 'transparent') {
          return { path: '/air', query: null }
        }
        if (hash === '#prada') {
          return { name: 'bags', hash: '' }
        }
        if (params.size > 10) {
          return '/super-shirt/:size'
        } else {
          return '/shirt/:size?'
        }
      }
    }
  ]
})


//global guard
router.beforeEach((to, from, next) => {
  NProgressMod.NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgressMod.NProgress.done()
})

export default router;
