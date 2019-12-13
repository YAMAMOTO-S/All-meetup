<template>
   <v-container>
      <v-row>
         <v-col>

            <v-card>
               <v-card-text>
                  <h1>Chat Room</h1>
                  <br>
                  <div class="card-content">
                     <ul class="messages">
                        <li>
                           <span class="teal-text username">NEME</span>
                           <span>time</span>
                           <h3>koreha tesuto</h3>
                        </li>
                     </ul>
                     <br>
                     
                  </div>
               </v-card-text>
            </v-card>
            <br>
            <!-- <v-text-field
            label="Text"
            outlined
          ></v-text-field> -->
          <Message :name="name" />      

         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import Message from '@/components/Message'

export default {
   props: ['name'],
   components: {
      Message
   },
   data(){
      return {
         message: ''
      }
   }
}
</script>

<style scoped>
.username {
   text-decoration : underline;
}
span {
   margin-right: 10px;
}
</style>

// チャットの本体と入力欄はコンポーネントを分けている。
// 別々の物をfirebaseに送ったりするから、そっちの方が良い。