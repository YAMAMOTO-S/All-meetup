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
export default {
   data(){
      return {
         email: null,
         password: null,
         name: null,
         imageUrl: 'https://image.freepik.com/free-vector/social-media-refer-friend-concept_23-2148260460.jpg'
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
      signup(){
         console.log(this.name)
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