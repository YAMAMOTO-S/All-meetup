<template>
   <v-container>
      <v-row>

         <v-col class="mx-auto" cols="12" md="9" sm="9">
            <form @submit.prevent="submitMeetup">

               <h2 class="title">Create your meetup!!</h2>
               <br>
               <v-text-field label="Title" name="title" required v-model="title">
               </v-text-field>
               <v-text-field label="Location" name="location" required v-model="location">
               </v-text-field>
               <v-text-field label="Image URL" name="imageUrl" required v-model="imageUrl">
               </v-text-field>
               <v-textarea label="Description" name="description" required multi-line v-model="description">
               </v-textarea>
<!-- 写真プレビュー -->
               <div class="subbtn">
                  <img :src="imageUrl" height="200">
               </div>
<!-- 全て入れないとボタンが浮き出ないようにしている。 -->
               <div class="subbtn">
                  <v-btn :disabled="!formIsValid" type="submit">Create</v-btn>
               </div>

            </form>
         </v-col>

      </v-row>
   </v-container>
</template>


<script>
import db from '@/firebase/init'
import slugify from 'slugify'


export default {
   data(){
      return{
         title: null,
         location: null,
         description: null,
         imageUrl: null,
         feedback: '',
         slug: null
      }
   },
   computed: {
      formIsValid(){
         // 全て埋めないと浮き出ない用になっている
         return this.title !== '' && this.location !== '' 
         && this.imageUrl !== '' && this.description !== ''
      },
   },
   methods: {
// firebaseに送信      
      submitMeetup() {
         if(this.title){
            this.feedback = null
            // slugifyを使って小文字化する。
            this.slug = slugify('this.title', {
               replacement: '-',
               remove: /[$*_+~.()'"!\-:@]/g,
               lower: true
            })
            // firebase に送信
            db.collection('seetups').add({
               title: this.title,
               slug: this.slug,
               location: this.location,
               imageUrl: this.imageUrl,
               description: this.description
            }).then(() => {
               this.$router.push({ name: 'HelloWorld'})
            }).catch(err => {
               console.log(err)
            })
         } else {
            this.feedback = 'You must fill in the blanks'
         }
      }
   }
}
</script>

<style scoped>
.title{
   color: black;
   text-align: center;
   margin: 50px;
}
.subbtn{
   text-align: center;
   margin: 20px;
}
.imagepre{
   width: auto;
}

</style>