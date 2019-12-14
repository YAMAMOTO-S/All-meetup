<template>
   <!-- <v-container> -->
          <form @submit.prevent="submittext">
           <v-text-field
            label="New Message (enter to add)"
            outlined
            @submit.prevent="submittext"
            v-model="newMessage"
           >
          <v-btn type="submit"></v-btn>
          </v-text-field>
          <h5 class="red--text text--lighten-2" v-if="feedback" >{{feedback}}</h5>
          </form>
   <!-- </v-container> -->
</template>


// スクリプト
<script>
import db from '@/firebase/init'

export default {
   props: ['name'],
   data(){
      return{
         newMessage: null,
         feedback: null,
      }
   },
   methods: {
      // firebaseに送る
      submittext(){
         if(this.newMessage){
            db.collection('messages').add({
               content: this.newMessage,
               name: this.name,
               timestamp: Date.now()
            }).catch(err => {
               console.log(err)
            })
            // ここでフォームを空にしている。
            // これが無いとMEssageが残ったままになってしまう。
            this.newMessage = null
            this.feedback = null
         } else {
            this.feedback = "You must enter something"
         }
      }
   }
}
</script>

// スタイル
<style scoped>

</style>