<template>
  <div class="create-new-todo">
    <h1>Add New Todo</h1>
    <form  id="app" @submit.prevent="addTodoItem">
      <p v-if="todoItem.errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error,i) in todoItem.errors" :key="i">{{ todoItem.error }}</li>
    </ul>
  </p>
      <label for="todo">Todo</label>
      <input class="todo" id="todo" v-model="todoItem.todo" type="text" name="todo">   
        <label for="author">Author</label>
        <input id="author" class="author" v-model="todoItem.author" type="text" name="author">
        <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      todoItem:{
      errors:[],
      todo:null,
      author:null,
      time:"0000/00/00 00:00"   
      }
    }
  },
  methods:{
    checkForm(){
       if (this.todoItem.todo && this.todoItem.author) {
        return true;
      }

      this.todoItem.errors = [];

      if (!this.todoItem.todo) {
        this.todoItem.errors.push('Todo required.');
      }
      if (!this.todoItem.author) {
        this.todoItem.errors.push('Author required.');
      }
   
    },
    nowTime(){
      let now = new Date()
      return this.todoItem.time = now.getFullYear() + "/" + now.getMonth()+1 +"/" + now.getDate()+ " " + now.getHours()+ " : " + ( '0' + now.getMinutes() ).slice( -2 )       
    },
    addTodoItem(){
  
      // if (this.todoItem.todo===null || this.todoItem.author===null) {
      //   alert("Please input both fields")
      //   return
      //   }
      if( this.checkForm())
      
     
      this.nowTime()
      this.$store.commit('addTodoItem',this.todoItem)
      this.$router.push('/')
      }
    },
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
  background:rgb(162, 194, 204);
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
  width:80%;
  cursor:pointer;
}
input:hover{
  background: darkgray; 
}
label{
  color:white
}

</style>