import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Ele from '@/views/Ele/Ele'
import Sub from '@/views/Sub/Sub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/ele',
      name: 'Ele',
      component: Ele
    }, {
      path: '/sub',
      name: 'Sub',
      component: Sub
    }
  ]
})
