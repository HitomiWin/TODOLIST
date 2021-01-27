<template>
  <div class="create-new-todo">
    <h1>Add New Todo</h1>
    <form @submit.prevent="addTodoItem">
        <label for="todo">What do you have to do?</label>
        <input class="todo" v-model="todoItem.todo" type="text" name="todo" Value="">
        <label for="author">Who created list ?</label>
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
      time: new Date().toLocaleString(),
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
      this.$router.push('/')
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
  color:white;
  margin:1rem;
}
*{
  max-width:700px;
  margin:auto;
  text-align: center;
}
button{
  margin:1rem;
  padding:0.3rem;
  width:100px;
}
button:hover{
  background:rgba(128, 128, 128, 0.8)
}

form{
  display:flex;
  flex-direction:column;
  align-items:center; 
  margin-top:1rem
}
input[type=text] {
  padding: 5px;
  margin: 8px 0;
  width:50vw;
  cursor:pointer;
}
input:hover{
  background: darkgray;
  opacity: 0.8;
}
label{
  color:white
}

</style>