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
        // isDone:false
        
      },
      {
        todo:"Make up with Ron",
        author:"Hermione",
        time:"1788/01/28",
        // isDone:true
      },
      { 
        todo:"Feed the dragon",
        author:"Hagrid",
        time:"1788/01/28",
        // isDone:false
      },
      { 
        todo:"Practice chess",
        author:"Ron",
        time:"1788/01/28",
        // isDone:false
      },
    ],
    doneList:[]
    
  },
  mutations: { 
    removeTodoItem(state, todoItem){ 
      state.todoList = state.todoList.filter(remain=>remain !== todoItem)
    },

    addTodoItem(state, todoItem){
      state.todoList.unshift(todoItem)
    },

    sortDone(state,todoItem){    
      let i = state.todoList.indexOf(todoItem)
      let doneItems = state.todoList.splice(i,1)
      this.state.doneList.push(doneItems[0])         
    },
    backDone(state,doneItem){    
      let i = state.doneList.indexOf(doneItem)
      let todoItems = state.doneList.splice(i,1)
      this.state.todoList.unshift(todoItems[0])         
    },
  },
 
  actions: {
  },
  modules: {
  }
})
