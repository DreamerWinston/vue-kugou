import Vue from 'vue'
import Router from 'vue-router'

import sidebar from 'components/sidebar/sidebar'
import listen from 'components/listen/listen'
import watch from 'components/watch/watch'
import sing from 'components/sing/sing'
import search from 'components/search/search'
import local from 'components/k-localmusic/k-localmusic'
import kBaseAni from 'components/k-base-animation/k-base-animation'
import kBase from 'components/k-base-anim/k-base-anim'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBacka = true
  this.go(-1)
}



export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/listen',
      component: kBase,
      children: [
        {
          path: '/sidebar',
          name: 'sidebar',
          component: sidebar
        },
        {
          path: '/listen',
          name: 'listen',
          component: kBaseAni,
          children: [
            {
              path: '',
              name: 'listen',
              component: listen
            },
            {
              path: '/local',
              name: 'local',
              component: local
            }
          ]
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
    }
  ]
})
