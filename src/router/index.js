import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserLogin from '@/pages/UserLogin'
import UserRegistration from '@/pages/UserRegistration'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user_login',
      name: 'user_login',
      component: UserLogin
    },
    {
      path: '/user_registration',
      name: 'user_registration',
      component: UserRegistration
    }
  ]
})