// params でslugを持ってきて、それを元にファイルの特定を行っている。

<template>
   <v-container>
      <v-row>
         <v-col>
            <v-card class="mx-auto" max-width="600px">
               <v-card-text>

                  <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.imageUrl"
                  >
                  </v-img>
                  <br> 
                  <p class="display-1 text--primary">
                     {{ meetup.title}}
                  </p>
                  <div class="text--primary">
                  {{ meetup.description}}
                  </div>

               </v-card-text>
               <v-card-actions>
                  <v-btn depressed>
                  <v-icon left>mdi-cards-heart</v-icon>   
                  Register
                  </v-btn>
                  <v-btn depressed :to="{ name: 'EditMeetup', params: {meetup_slug: meetup.slug}}">
                     <v-icon>mdi-pencil</v-icon>
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
         meetup: ''
      }
   },
   created(){
// Firebaseからデータを持ってくる。
// refに引き抜いたオブジェクトを代入している。      
      let ref = db.collection('seetups').where('slug', '==', this.$route.params.meetup_slug)
      ref.get().then(snapshot => {
         snapshot.forEach(doc => {
            // ここで上のmeetupにデータを入れる。
            this.meetup = doc.data()
            this.meetup.id = doc.id
         });
      })
   },

}
</script>

<style>

</style>