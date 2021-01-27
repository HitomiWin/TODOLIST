<template>
  <div class="create-new-todo">
    <h1>Add New Todo</h1>
    <form @submit.prevent="sendNewItemToTodList">
        <label for="todo">Todo</label>
        <input class="todo" v-model="todoItem.todo" type="text" name="todo" Value="">
        <label for="author">Author</label>
        <input class="author" v-model="todoItem.author" type="text" name="author" Value="">
        <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      todoItem:{
      todo:"",
      author:"",
      time: "0000/00/00 00:00",
      }
    }
  },
  methods:{
    sendNewItemToTodList(){
      this.addTodoItem()
      this.nowTime()
      console.log(this.time)
    }, 
    addTodoItem(){   
      this.$store.commit('addTodoItem',this.todoItem)
    },

    nowTime(){
        let now = new Date()
        this.time = now.getFullYear() + "/" +now.getMonth() +"/" + now.getDate()+" "+ now.getHours()+":"+ now.getMinutes();
        console.log(this.time)
        // return this.time
   },
  }
}
</script>

<style scoped>

h1{
  color:white
}
</style>