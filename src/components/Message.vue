<template>
   <v-container>
          <form @submit.prevent="submittext">
             <v-text-field
            label="New Message (enter to add)"
            outlined
            @submit.prevent="submittext"
            v-model="newMessage"
          >
          <v-btn type="submit"></v-btn>
          </v-text-field>
          </form>
   </v-container>
</template>

<script>
export default {
   props: ['name'],
   data(){
      return{
         newMessage: null,
      }
   },
   methods: {
      submittext(){
         console.log(this.newMessage, this.name, Date.now())
      }
   }
}
</script>


<style scoped>

</style>