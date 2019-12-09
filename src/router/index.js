import Vue from 'vue'
import VueRouter from 'vue-router'
import Meetups from '@/components/Meetups'
import HelloWorld from '@/components/HelloWorld'
import CreateMeetup from '@/components/CreateMeetup'
import EditMeetup from '@/components/EditMeetup'
import Meetup from '@/components/Meetup'
import Chat from '@/components/Chat'

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
  },
  {
    path: '/create',
    name: 'CreateMeetup',
    component: CreateMeetup
  },
  {
    path: '/edit-meetup/:meetup_slug',
    name: 'EditMeetup',
    component: EditMeetup
  },
  {
    path: '/meetups/:meetup_slug',
    name: 'Meetup',
    props: true,
    component: Meetup
  },
  {
    path: '/chat',
      name: 'Chat',
      component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
