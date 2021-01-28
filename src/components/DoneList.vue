<template>
<div class="doneList">
    <ul>
      <li class="done-list-container" @click="backDone"  >
        <div class="todo" >  
          <span>{{doneItem.todo}}</span>
        </div>
        <div class="sub-disc">
          <p>Created by <span class="author">{{doneItem.author}}</span></p> 
          <p class="time"><span>{{doneItem.time}}</span></p>
        </div>
        <p @click="removeTodoItem" class="remove-button">X</p>
      </li>        
    </ul>         
</div>           
</template>

<script>
export default {
 props:["doneItem"],
  methods:{
   removeTodoItem(){
    this.$store.commit('removeTodoItem',this.doneItem)
    } ,  
 
   backDone(){
    this.$store.commit('backDone',this.doneItem)
    }
  } 
}
</script>

<style scoped>
.done-list-container{
  background:rgba(206, 206, 206, 0.726);
  padding:0.5rem;
  display:flex;
  justify-content: space-between;
  
}
.done-list-container:hover{
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
  color:rgb(105, 95, 95);
  text-decoration:line-through;
}
.sub-disc >:last-child {
  text-decoration:line-through;
  color:rgb(105, 95, 95);

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
  text-decoration:line-through;
  color:rgb(105, 95, 95);
}

.author{
  color:rgb(105, 95, 95);
}
.time{
  color:black;
  font-size:0.8rem;
}
</style>