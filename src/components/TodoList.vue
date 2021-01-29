<template>
<div class="todo-list">
  <ul>
    <li class="todo-list-container" >
    <div class="arrow-container">
      <span @click="moveUpTodoItem" class="arrow">&#8593;</span>
      <span @click="moveDownTodoItem" class="arrow">&#8595;</span> 
    </div>  
      <div class="todo" @click="sortDone" >
        <span>{{todoItem.todo}}</span>         
        <div class="sub-disc">
        <p>Created by <span class="author">{{todoItem.author}}</span></p> 
        <p class="time"><span>{{todoItem.time}}</span></p>
        </div>
      </div>   
      <p @click="removeTodoItem" class="remove-button">X</p>
    </li>        
  </ul>

</div>
            
</template>

<script>
export default {
 props:["todoItem"],
  methods:{
    removeTodoItem(){
       this.$store.commit('removeTodoItem',this.todoItem)
    },  
 
    sortDone(){
    this.$store.commit('sortDone',this.todoItem)
    },

    moveUpTodoItem(){
      this.$store.commit('moveUpTodoItem',this.todoItem)
    },

    moveDownTodoItem(){
      this.$store.commit('moveDownTodoItem',this.todoItem)
    },
  } 
}
</script>

<style scoped>

.todo-list-container{
  background:rgba(206, 206, 206, 0.95);
  padding:0.5rem;
  display:flex;
  justify-content: space-between;
}
.todo-list-container:hover{
  background:rgb(172, 167, 172); 
}
.todo:hover{
  cursor:pointer;
}
.arrow {
  font: bold;
  font-size:2em;
  margin:0.5rem; 
  color: white; 
}
.arrow:hover{
  cursor:pointer;
}
.arrow-container{
  flex-grow: 0;
  flex-shrink: 0;  flex-basis: 10%;
}
.todo{
  display:flex;
  justify-content: space-between;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 85%;
  text-align: left;  
}

.sub-disc >:first-child{
  margin: 0.5em 0;
}
.sub-disc{
  flex-basis: 30%;
  text-align: left;
}
.todo >span{
  font-size:1.5rem;
}
.author{
  color:darkblue;
  }

</style>