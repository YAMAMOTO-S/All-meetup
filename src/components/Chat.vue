<template>
   <v-container>
      <v-row>
         <v-col>
            
            <v-card class="mx-auto mb-7" max-width="800">
               <v-img
                  class=""
                  height="200px"
                  :src="imageUrl"
                  >
               </v-img>
               <v-card-text>
                  <h1 class="title">Enter your name</h1>
                  <form @submit.prevent="enterChat">
                     <p v-if="feedback">{{ feedback }}</p>
                     <v-text-field label="Name" name="name" required v-model="name">
                     </v-text-field>
                     <div class="subbtn">
                        <v-btn large type="submit">
                         enter
                        </v-btn> 
                     </div>
                  </form>
               </v-card-text>

            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
export default {
   data(){
      return{
         name: null,
         imageUrl: 'https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-18636.jpg',
         feedback: null
      }
   },
   methods: {
      enterChat(){
         if(this.name) {
            this.$router.push({ name: 'ChatRoom', params: { name: this.name } })
         } else {
            this.feedback = 'You must enter your name to join'
         }
      },
   }
}
</script>


<style scoped>
.title{
   text-align: center;
   margin-top: 50px;
}
.subbtn{
   text-align: center;
   margin: 20px;
}
.labels{
   text-align: center
}
form {
   margin: 100px;
}
</style>