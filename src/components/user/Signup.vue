<template>
   <v-container>
      <v-row>
         <v-col>
            <v-card class="mx-auto mb-7" max-width="800">
               <v-img
                  height="200px"
                  :src="imageUrl"
                  >
               </v-img>
               <h2 class="title">Signup</h2>

               <form @submit.prevent="signup">
                  <p red--text text--lighten-1 center v-if="feedback">{{ feedback }}</p>
                  <v-text-field label="Email" name="email" required v-model="email">
                  </v-text-field>
                  <v-text-field label="Password" name="password" required v-model="password">
                  </v-text-field>
                  <v-text-field label="User name" name="name" required v-model="name">
                  </v-text-field>
                  
                  <!-- 全て入れないとボタンが浮き出ないようにしている。 -->
                  <div class="subbtn">
                     <v-btn :disabled="!formIsValid" type="submit">Create</v-btn>
                  </div>

               </form>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'

export default {
   data(){
      return {
         email: null,
         password: null,
         name: null,
         feedback: null,
         slug: null,
         imageUrl: 'https://image.freepik.com/free-vector/social-media-refer-friend-concept_23-2148260460.jpg',
      }
   },
   computed: {
      formIsValid(){
         // 全て埋めないと浮き出ない用になっている
         return this.email !== '' 
         && this.password !== ''  && this.name !== ''
      }
   },
   methods: {
   // User登録
      signup(){
         // slugをユーザーの認識子として使用する。
         if(this.name){
            this.slug = slugify(this.name, {
               replacement: '-',
               remove: /[$*_+~.()'"!\-:@]/g,
               lower: true
            })

            // User内に同名の名前があるか確認。
            let ref = db.collection('users').doc(this.slug)
            ref.get().then(doc => {
               // 重複した場合
               if(doc.exists){
                  this.feedback = "This Username already exists"
               } else {
               // 使える場合
                  this.feedback = "This username is free to use"
               }
            })
            console.log(this.slug)
         } else {
            this.feedback = "You must enter an User name "
         }
      }
   }
}
</script>

<style>
.title{
   color: black;
   text-align: center;
   margin: 50px;
}
.subbtn{
   text-align: center;
   padding-bottom: 50px;
}

form {
   margin: 100px;
}
.test {
   border-color: black
  }

.datetitle{
     color: #898989;
     margin-bottom: 30px
  }
</style>

// Usernameを認識子として利用したい