<template>
<div class="todoList"> 
    <form>
      <div class="todo-list-container" >
        <div class="todo">
          <input type="checkbox"  name="todo" value="">
          <label for="todo">{{todoList.todo}}</label>
        </div>
        <div class="sub-disc">
          <p>Created by <span class="author">{{todoList.author}}</span></p> 
          <time>{{todoList.time}}</time>
        </div>
      </div>  
      <button type="submit"></button> 
    </form>       
</div>
             
</template>

<script>
export default {
 props:["todoList"]
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
    flex-basis: 70%;
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
label{
  font-size:1.5rem;
  margin-left:1rem;
}
.author{
  color:darkblue
}
time{
  color:black;
  font-size:0.8rem;
}


</style>