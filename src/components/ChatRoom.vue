<template>
   <v-container>
      <v-row>
         <v-col>

            <v-card class="mx-auto mb-7"
               max-width="800">
               <v-img
                  height="200px"
                  :src="topimage"
                  >
               </v-img>
               <br>
               <v-card-text>
                  <h1>Chat Room</h1>
                  <br>
                  <div class="card-content">
                     <ul class="messages">
                        <li v-for="message in messages" :key="message.id">
                           <span class="teal-text username">{{ message.name }}</span>
                           <h3>{{ message.content }}  <v-btn x-small icon @click="deleteMessage(message.id)"><v-icon>mdi-delete</v-icon></v-btn></h3>
                        </li>
                     </ul>
                     <br><br>
                     
                  </div>
               </v-card-text>
            </v-card>
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
         messages: [],
         topimage: 'https://cdn.dribbble.com/users/969880/screenshots/6397930/customer_talking_illustration_2x.jpg'
      }
   },
   created(){
      let ref = db.collection('messages').orderBy('timestamp')
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
   },
   methods: {
      deleteMessage(id){
         db.collection('messages').doc(id).delete()
         .then(() => {
            this.messages = this.messages.filter(message => {
               return message.id != id
            })
         })
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