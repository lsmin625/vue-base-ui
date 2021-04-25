import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Account from './components/Account.vue'
import Device from './components/Device.vue'
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

export default new Router({
    routes: [
      {
          path: '/account',
          name: 'Account',
          component: Account
        },
        {
          path: '/device',
          name: 'Device',
          component: Device
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        }
    ]
})
