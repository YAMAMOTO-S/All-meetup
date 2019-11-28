import Vue from 'vue'
import VueRouter from 'vue-router'
import Meetups from '@/components/Meetups'
import HelloWorld from '@/components/HelloWorld'


Vue.use(VueRouter)

const routes = [
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
