<template>
  <div class="home">
    <h1>Preparing for battle</h1> 
    <!-- <div v-if="todoList.length>0"> -->
    <TodoList v-for="(todoItem, i) in todoList" :key="i"  :todoItem="todoItem"/>
    </div>    
  <!-- </div> -->
</template>
<script>

import TodoList from "../components/TodoList"
export default {
  name: 'Home',
  components:{
    TodoList
  },
  computed:{
    todoList(){
    return this.$store.state.todoList
      },
    // todoList(){
    //   return this.$store.commit.isDoneToLastOfList
    // }
  },

 
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
  button{
    margin:1rem;
    padding:0.3rem;
    width:100px;
  }

</style>
