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
                        <li v-for="message in messages" :key="message.id">
                           <span class="teal-text username">{{ message.name }}</span>
                           <span>{{ message.timestamp }}</span>
                        <h3>{{ message.content }}</h3>
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
import db from '@/firebase/init'

export default {
   props: ['name'],
   components: {
      Message
   },
   data(){
      return {
         messages: []
      }
   },
   created(){
      let ref = db.collection('messages')
      // 更新されたらその箇所だけ見る。
      ref.onSnapshot(snapshot => {
         snapshot.docChanges().forEach(change => {
            // 変更箇所をchnageで個別に取り出して、messageに入れる。
            if(change.type == 'added'){
               // docで全てのデータをとっている
               let doc = change.doc
               this.messages.push({
                  id: doc.id,
                  content: doc.data().content,
                  name: doc.data().name,
                  timestamp: doc.timestamp
               })
            }
         })
      })
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