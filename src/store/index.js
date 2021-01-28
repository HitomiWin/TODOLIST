import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[
      {
        todo:"Learn magic",
        author:"Harry Potter",
        time:new Date().toLocaleString(),
        isDone:true
        
      },
      {
        todo:"Make up with Ron",
        author:"Hermione",
        time:new Date().toLocaleString(),
        isDone:false
      },
      {
        todo:"Feed the dragon",
        author:"Hagrid",
        time:new Date().toLocaleString(),
        isDone:false
      },
      {
        todo:"Practice chess",
        author:"Ron",
        time:new Date().toLocaleString(),
        isDone:false
      },
    ]
  },
  mutations: { 
    removeTodoItem(state, todoItem){ 
      state.todoList = state.todoList.filter(remain=>remain !== todoItem)
    },

    addTodoItem(state, todoItem){
      state.todoList.unshift(todoItem)
    },
    // isDoneToLastOfList:state=>{      
    //   state.todoList.sort((a,b)=>{
    //     return a.isDone>b.isDone; 
    //   });          
    // }

  },

  
  actions: {
  },
  modules: {
  }
})
