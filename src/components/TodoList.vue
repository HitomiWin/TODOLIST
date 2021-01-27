<template>
<div class="todoList">
    <ul>
      <li class="todo-list-container" >
        <div class="todo">
          <!-- <input type="checkbox" v-model="todoItem.isDone"> -->
          <!-- <span :class="{done: todoItem.isDone}">{{todoItem.todo}}</span> -->
          <span>{{todoItem.todo}}</span>
        </div>
        <div class="sub-disc">
          <p>Created by <span class="author">{{todoItem.author}}</span></p> 
          <time >{{todoItem.time}}</time>
        </div>
        <button  @click="removeTodoItem" class="remove-button">Done</button>
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
    }   
  },

}
</script>

<style scoped>
.todo-list-container{
  background:rgba(206, 206, 206, 0.726);
  padding:0.5rem;
  display:flex;
  justify-content: space-between;
}
.todo-list-container:hover{
   background:lightgray; 
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
.remove-button{
    align-self: center;
    background: rgb(155, 155, 179);
    color:white;
    font-family: Verdana, sans-serif;    
}
.sub-disc >:first-child{
  margin: 0.5em 0;
}
.todo >span{
  font-size:1.5rem;
  margin-left:1rem;
}
/* .todo >span.done{
  text-decoration:line-through;
  color:rgb(105, 95, 95);
} */
.author{
  color:darkblue
}
time{
  color:black;
  font-size:0.8rem;
}


</style>