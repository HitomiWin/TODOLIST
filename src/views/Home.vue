<template>
  <div class="home">
    <h1>Preparing for battle</h1> 
    <TodoList v-for="(todoList, i) in todoLists" :key="i" :todoList="todoList"/>
   </div>
</template>
<script>

import TodoList from "../components/TodoList"
export default {
  name: 'Home',

  components:{
    TodoList
  },
  computed:{
    todoLists(){
    return this.$store.state.todoLists
      } 
  }
}
</script>
<style scoped>
.home{
  max-width:700px;
  margin:auto;
  text-align: center;
}
h1{
  margin:2rem;
  color:white
}
.logo-container{
  margin:1rem auto;
  width:30%;

}
.logo-container img{
  width:100%;
}

</style>
