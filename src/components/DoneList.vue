<template>
<div class="doneList">
  <ul>
    <li class="done-list-container"   >
      <div class="todo" @click="backDone" >  
        <span>{{doneItem.todo}}</span>       
        <div class="sub-disc">
          <p>Created by <span class="author">{{doneItem.author}}</span></p> 
          <p class="time"><span>{{doneItem.time}}</span></p>
        </div>
      </div>
      <p @click="removeDoneItem" class="remove-button">X</p>
    </li>        
  </ul>         
</div>           
</template>

<script>
export default {
 props:["doneItem"],
  methods:{
   removeDoneItem(){
    this.$store.commit('removeDoneItem',this.doneItem)
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
  background:rgb(179, 197, 181) 
}
.todo{
  display:flex;
  justify-content:space-between;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 95%;
  text-align: left;   
}
.todo:hover{
  cursor:pointer;
 
}
.sub-disc{
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
.todo >span{
  font-size:1.5rem;
  margin-left:1rem;
  text-decoration:line-through;
  color:rgb(105, 95, 95);
}
.author{
    color:rgb(105, 95, 95);
  }


/* @media screen and (max-width: 600px) {
  .todo{
  flex-basis: 65%;
}
.sub-disc{
  flex-basis: 30%;
  text-align: left;
}
} */
</style>