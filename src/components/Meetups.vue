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

               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
   data(){
      return {
         meetups: [
            { title: 'TOKYO MEETUPS !!', slug: 'yokyo-meetups', description: 'this is Tokyo Meetup !!',
               imageUrl: 'https://watashinomori.jp/shared/img/i_top_slide09.jpg', id: '1'},
            { title: 'JAPAN MEETUPS !!', slug: 'japan-meetups', description: 'this is Japan Meetup !!',
               imageUrl: 'https://www.realgap.co.uk/tpl/lib/img/public/compressed-images/tpl/lib/img/private/media/1721_496829791__website__-_crop-1200x0-85.jpg', id: '2'}
         ]
      }
   }
}
</script>

<style>
.btnb{
   padding-right: 50px;
}
</style>
