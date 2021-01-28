<template>
<div class="todoList">
  <ul>
    <li class="todo-list-container" @click="sortDone">
      <div class="todo" >   
      <span>{{todoItem.todo}}</span> 
    </div>       
    <div class="sub-disc">
      <p>Created by <span class="author">{{todoItem.author}}</span></p> 
      <p class="time"><span>{{todoItem.time}}</span></p>
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
    } ,  
 
    sortDone(){
    this.$store.commit('sortDone',this.todoItem)
    }
  } 

}
</script>

<style scoped>
.todo-list-container{
  background:rgba(206, 206, 206, 0.87);
  padding:0.5rem;
  display:flex;
  justify-content: space-between;
}
.todo-list-container:hover{
  background:rgb(172, 167, 172); 
  cursor:pointer;
}
.todo{
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 65%;
  text-align: left;  
}
.sub-disc{
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 30%;
  text-align: left;
}
.sub-disc >:first-child{
  margin: 0.5em 0;
}

.remove-button {
  font:bold;
  align-self: center;
  color:darkred;
  font-family: Verdana, sans-serif;    
}
.remove-button:hover{
  cursor:pointer;
}
.todo >span{
  font-size:1.5rem;
  margin-left:1rem;
}

.author{
  color:darkblue
}
.time{
  color:black;
  font-size:0.8rem;
}
</style>