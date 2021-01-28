<template>
  <div class="home">
    <h1>Preparing for battle</h1> 
    <!-- <div v-if="todoList.length>0"> -->
    <TodoList v-for="(todoItem, i) in  sortList" :key="i"  :todoItem="todoItem"/>
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
    notDoneTodos(){
    return this.$store.getters.notDoneTodos
    },
    doneTodos(){
    return this.$store.getters.doneTodos
      },
    sortList(){
      return this.notDoneTodos.concat(this.doneTodos)
    }
    
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
