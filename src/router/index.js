import Vue from 'vue'
import Router from 'vue-router'

import sidebar from 'components/sidebar/sidebar'
import listen from 'components/listen/listen'
import watch from 'components/watch/watch'
import sing from 'components/sing/sing'
import search from 'components/search/search'

import local from 'components/k-localmusic/k-localmusic'
import love from 'components/k-lovemusic/k-lovemusic'
import download from 'components/k-downloadmusic/k-downloadmusic'
import history from 'components/k-historymusic/k-historymusic'

import musicstore from 'components/k-musicstore/k-musicstore'
import musiclist from 'components/k-musiclist/k-musiclist'
import radio from 'components/k-musicradio/k-musicradio'
import guess from 'components/k-musicguess/k-musicguess'
import daily from 'components/k-musicdaily/k-musicdaily'
import round from 'components/k-musicround/k-musicround'
import recogn from 'components/k-musicrecogn/k-musicrecogn'

import login from 'components/k-musiclogin/k-musiclogin'
import message from 'components/k-musicmessage/k-musicmessage'


import kBaseAni from 'components/k-base-animation/k-base-animation'
import kBase from 'components/k-base-anim/k-base-anim'

import personal from 'components/k-personal/k-personal'

import musicdetail from 'components/musicdetail/musicdetail'

Vue.use(Router)

import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

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
            },
            {
              path: '/love',
              name: 'love',
              component: love
            },
            {
              path: '/downloads',
              name: 'downloads',
              component: download
            },
            {
              path: '/history',
              name: 'history',
              component: history
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
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal
        },
        {
          path: '/store',
          name: 'store',
          component: musicstore
        },
        {
          path: '/musiclist',
          name: 'musiclist',
          component: musiclist
        },
        {
          path: '/radio',
          name: 'radio',
          component: radio
        },
        {
          path: '/guess',
          name: 'guess',
          component: guess
        },
        {
          path: '/daily',
          name: 'daily',
          component: daily
        },
        {
          path: '/round',
          name: 'round',
          component: round
        },
        {
          path: '/recogn',
          name: 'recogn',
          component: recogn
        },
        {
          path: '/message',
          name: 'message',
          component: message
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/musicdetail',
          name: 'musicdetail',
          component: musicdetail
        }
      ]
    },

  ]
})

