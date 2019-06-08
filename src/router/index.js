import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserLogin from '@/pages/UserLogin'
import UserRegistration from '@/pages/UserRegistration'
import CompanyLogin from '@/pages/CompanyLogin'
import CompanyRegistration from '@/pages/CompanyRegistration'
import Dashboard from '@/pages/Dashboard'

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
    },
    {
      path: '/company_login',
      name: 'company_login',
      component: CompanyLogin
    },
    {
      path: '/company_registration',
      name: 'company_registration',
      component: CompanyRegistration
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})