import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[
      {
        todo:"Learn magic",
        author:"Harry Potter",
        time:"1788/01/28",
        isDone:false
        
      },
      {
        todo:"Make up with Ron",
        author:"Hermione",
        time:"1788/01/28",
        isDone:true
      },
      {
        todo:"Feed the dragon",
        author:"Hagrid",
        time:"1788/01/28",
        isDone:false
      },
      {
        todo:"Practice chess",
        author:"Ron",
        time:"1788/01/28",
        isDone:false
      },
    ],
    
  },
  mutations: { 
    removeTodoItem(state, todoItem){ 
      state.todoList = state.todoList.filter(remain=>remain !== todoItem)
    },

    addTodoItem(state, todoItem){
      state.todoList.unshift(todoItem)
    },

    // srotList(state, todoItem){
    //   state.todoList =state.todoList.sort(function(a,b){
    //     return a.todoItem >b.todoItem
    //   });
     
    // }
  },
  getters:{
    doneTodos:state=>{
      return state.todoList.filter(todoItem=>todoItem.isDone)
    },
    notDoneTodos:state=>{
      return state.todoList.filter(todoItem=>!todoItem.isDone)
    }
  },

  
  actions: {
  },
  modules: {
  }
})
