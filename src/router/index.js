import Vue from 'vue'
import VueRouter from 'vue-router'
import Meetups from '@/components/Meetups'
import HelloWorld from '@/components/HelloWorld'
import CreateMeetup from '@/components/CreateMeetup'
import EditMeetup from '@/components/EditMeetup'
import Meetup from '@/components/Meetup'
import Chat from '@/components/Chat'
import ChatRoom from '@/components/ChatRoom'

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
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next()
      } else {
        next({ name: 'Chat' })
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
