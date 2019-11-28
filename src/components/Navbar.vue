<template>
  <v-app>
  <div class="Navbar">
    
<!-- ここからメインのバー -->
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link style="cursor: pointer">
          <v-icon>mdi-emoticon-neutral-outline</v-icon>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
  
      <v-toolbar-items v-for="item in menuItems" :key="item.title">
        <!-- 移動できるように設定 -->
        <v-btn text>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>


  </div>
  </v-app>
</template>

<script>
export default {
  name: 'Navbar',

  data(){
    return{
    }
  },
  computed: { 
    menuItems(){
      let menuItems = [
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Sign in', link: '/signin'},
        { icon: 'mdi-face', title: 'All Meetups', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'Create', link: 'meetup/new'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
      ]
    },
  }
}
</script>

<style scoped>
.face{
  margin-right: 20px
}
</style>