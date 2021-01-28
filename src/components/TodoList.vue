<template>
<div class="todoList">
    <ul>
      <li class="todo-list-container" @click="removeDone" >
        <div class="todo">
          <!-- <input type="checkbox" v-bind="removeDone" > -->
          <!-- <span :class="{done: todoItem.isDone}">{{todoItem.todo}}</span> -->
          <span>{{todoItem.todo}}</span>
        </div>
        <!-- <div :class="{done: todoItem.isDone}" class="sub-disc"> -->
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
 
    removeDone(){
    this.$store.commit('removeDone',this.todoItem)
    }
  } 

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
.sub-disc >:first-child{
  margin: 0.5em 0;
}
.sub-disc.done >:first-child ,.sub-disc.done >:last-child {
   text-decoration:line-through;
}
.remove-button {
    font:bold;
    align-self: center;
    /* background: rgb(155, 155, 179); */
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
.todo >span.done{
  text-decoration:line-through;
  color:rgb(105, 95, 95);
}
.author{
  color:darkblue
}
.time{
  color:black;
  font-size:0.8rem;
}


</style>