<template>
   <v-container>
      <v-row>

         <v-col class="mx-auto" cols="12" md="9" sm="9">
            <form @submit.prevent="EditMeetup">

               <h2 class="title">{{ meetup.title }}</h2>
               <br>
               <v-text-field label="Title" name="title" required v-model="meetup.title">
               </v-text-field>
               <v-text-field label="Location" name="location" required v-model="meetup.location">
               </v-text-field>
               <v-text-field label="Image URL" name="imageUrl" required v-model="meetup.imageUrl">
               </v-text-field>
               <v-textarea label="Description" name="description" required multi-line v-model="meetup.description">
               </v-textarea>
<!-- 写真プレビュー -->
               <div class="subbtn">
                  <img :src="meetup.imageUrl" height="200">
               </div>

               <div class="subbtn">
                  <v-btn depressed type="submit">Edit</v-btn>
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
         meetup: ''
      }
   },
   created(){
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
   methods: {
      EditMeetup(){
         if(this.meetup.title){
            this.feedback = null
            // slugifyを使って小文字化する。
            this.meetup.slug = slugify(this.meetup.title, {
               replacement: '-',
               remove: /[$*_+~.()'"!\-:@]/g,
               lower: true
            })
            // firebase に送信
            db.collection('seetups').doc(this.meetup.id).update({
               title: this.meetup.title,
               slug: this.meetup.slug,
               location: this.meetup.location,
               imageUrl: this.meetup.imageUrl,
               description: this.meetup.description
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
   margin: 20px;
}
.imagepre{
   width: auto;
}

</style>