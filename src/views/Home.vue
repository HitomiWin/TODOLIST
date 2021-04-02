<template>
  <div class="home">
    <h1>Preparing for battle</h1> 
    <div v-if="todoList.length > 0">
      <TodoList v-for="(todoItem, i) in todoList" :key="i"  :todoItem="todoItem"/>
    </div>
    <div v-if="doneList.length > 0">
      <DoneList v-for="(doneItem, i) in doneList" :key="'A'+ i"  :doneItem="doneItem"/>
    </div>
    <div v-if="todoList.length===0 && doneList.length===0">
      <h1>Are you ready for battle ?</h1><br>
      <img v-bind:src="image" alt="Dumbledore Image">
    </div>    
  </div>
</template>

<script>
  import dumbledore from "../assets/dumbledore-image.jpg"
  import TodoList from "../components/TodoList"
  import DoneList from "../components/DoneList"
  export default {
    name: 'Home',
    data(){
      return {
        image:dumbledore,
      }
    },
    components:{
      TodoList,
      DoneList
    },
    
    computed:{
      todoList(){
      return this.$store.state.todoList
      },  
      doneList(){
      return this.$store.state.doneList
      },
    }, 
  }
</script>

<style scoped>
  .home{
    max-width:900px;
    margin:auto;
    text-align: center;
  }
  h1{
    margin:2rem;
    color:white
  }

  

</style>
