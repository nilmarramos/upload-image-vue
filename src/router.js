import Vue from 'vue'
import Router from 'vue-router'

import AuthHandler from './components/AuthHandler'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
})
