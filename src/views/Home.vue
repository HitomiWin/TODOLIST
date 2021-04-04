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
      <img v-bind:src="image" alt="Magick stick Image">
    </div>    
  </div>
</template>

<script>
  import stick from "../assets/kenny-gaines-hwcghym9tAs-unsplash(2).jpg"
  import TodoList from "../components/TodoList"
  import DoneList from "../components/DoneList"
  export default {
    name: 'Home',
    data(){
      return {
        image:stick,
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
    margin:1rem;
    color:white
  }
  img{
    max-width:70vw;
    height:auto;
  }

  @media only screen and (min-width: 600px) {
  img{
    max-width:50vw;
    height:auto;
  }
  }
  @media only screen and (min-width: 900px) {
  img{
    max-width:20vw;
    height:auto;
  }
  }
 
</style>
