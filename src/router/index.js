import Vue from 'vue'
import Router from 'vue-router'

import sidebar from 'components/sidebar/sidebar'
import listen from 'components/listen/listen'
import watch from 'components/watch/watch'
import sing from 'components/sing/sing'
import search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/listen'
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: sidebar
    },
    {
      path: '/listen',
      name: 'listen',
      component: listen
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/sing',
      name: 'sing',
      component: sing
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
