<template>
  <v-container>
         <v-row class="center_btn">
            <v-col>
               <v-btn large router to='/meetup/new'>CREATE</v-btn>
            </v-col>
            <v-col>
               <v-btn large router to='/meetup/new'>CREATE</v-btn>
            </v-col>
            <v-col>
               <v-btn large router to='/meetup/new'>CREATE</v-btn>
            </v-col>
         </v-row>

         <!-- 中央のスライド -->
         <v-row>
           <v-carousel height="400" hide-delimiter-background show-arrows-on-hover class="cards">
               <v-carousel-item
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.imageUrl"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
               ></v-carousel-item>
            </v-carousel>
         </v-row>   

      </v-container>
</template>

<script>
export default {
   data(){
      return{
         meetups: [
            
         ]
      }
   }
}
</script>

<style scoped>
.center_btn{
   text-align:center;
   margin-top: 50px;
   margin-bottom: 50px;
}
.cards{
   max-width: 800px;
   text-align: center;
   margin: auto;
}
</style> 
