<template>
  <v-app>
    <div>
      <v-toolbar>
      
      <v-toolbar-title>Title</v-toolbar-title>
      <v-toolbar-title>
        <router-link style="cursor: pointer">
          <v-icon>mdi-emoticon-neutral-outline</v-icon>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in menuItems" :key="item.title">
        <v-btn text>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>



    <HelloWorld/>
    </div>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data() {
    return{
            menuItems: [
        { icon: 'mdi-face', title: 'Meetup', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'Organize Meetup', link: 'meetup/new'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Sign in', link: '/signin'}
      ]
    }
  }
};
</script>
