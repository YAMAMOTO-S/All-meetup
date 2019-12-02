<template>
  <v-container>
         <v-row>
        <v-col>
            <v-card
               class="mx-auto mb-7"
               max-width="800"
               v-for="meetup in meetups" :key="meetup.id"
            >
               <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.imageUrl"
               >
                  <v-card-title>{{ meetup.title }}</v-card-title>
               </v-img>

               <v-card-subtitle class="pb-0">{{ meetup.date | date }}</v-card-subtitle>

               <v-card-text class="text--primary">
                  <div>{{ meetup.description }}</div>
               </v-card-text>

               <v-card-actions>
                  <!-- 個別のページに行く -->
                  <v-btn depressed :to="'/meetups/' + meetup.id" max-width="300">
                     View Detail
                  </v-btn>
                  <v-btn depressed @click="deleteMeetup(meetup.id)">
                     <v-icon>mdi-delete</v-icon>
                  </v-btn>

               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
  </v-container>
</template>

<script>
import db from '@/firebase/init'

export default {
   data(){
      return {
         meetups: [
           
         ]
      }
   },
    methods: {
// 削除機能
         deleteMeetup(id){
            this.meetups = this.meetups.filter(meetup => {
               return meetup.id != id
            })
         }
      },
   created() {
// fetch data from firestore
      db.collection('seetups').get()
         .then(snapshot => {
            snapshot.forEach(doc => {
               let meetup = doc.data()
               meetup.id = doc.id
               this.meetups.push(meetup)
            })
         })
   }
}
</script>

<style>
.btnb{
   padding-right: 50px;
}
</style>
