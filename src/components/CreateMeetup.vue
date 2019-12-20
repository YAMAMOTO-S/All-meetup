<template>
   <v-container>
      <v-row>

         <v-col >
            <v-card class="mx-auto mb-7" max-width="800">
            <v-img
                  height="200px"
                  :src="topimage"
                  >
            </v-img>

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
               <div>
                  <p class="datetitle">Choose a Data you want</p>
                  <v-date-picker v-model="date" color="blue-grey lighten-3" full-width>
                     <p>{{ date }}</p>
                  </v-date-picker>
               </div>
               
<!-- 写真プレビュー -->
               <br>
               <div class="subbtn">
                  <img :src="imageUrl" height="200">
               </div>
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
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
   components: {
      
   },

   data(){
      return{
         title: null,
         location: null,
         description: null,
         imageUrl: null,
         feedback: '',
         slug: null,
         topimage: 'https://image.freepik.com/free-vector/group-people-working-together_52683-28615.jpg',
         date: '',
      }
   },
   computed: {
      formIsValid(){
         // 全て埋めないと浮き出ない用になっている
         return this.title !== '' && this.location !== '' 
         && this.imageUrl !== '' && this.description !== ''
         && this.date !== ''
      },
      // firestoreに送るDateを設定
      submitDate(){
        const date = new Date(this.date).toISOString().substr(0, 10)
        return date
      }
   },
   methods: {
// Meetup をfirebaseに送信する。      
      submitMeetup() {
         if(this.title){
            this.feedback = null
            // slugifyを使って小文字化する。
            this.slug = slugify(this.title, {
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
               description: this.description,
               timestamp: Date.now(),
               date: this.submitDate
            }).then(() => {
               // 完了するとホームに戻る
               this.$router.push({ name: 'Meetups'})
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