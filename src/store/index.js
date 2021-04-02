import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[
      { 
        todo:"Learn magic",
        author:"Harry Potter",
        time:"1788/01/28 20:00",        
      },
      {
        todo:"Make up with Ron",
        author:"Hermione",
        time:"1788/01/28 20:00",        
      },
      { 
        todo:"Feed the dragon",
        author:"Hagrid",
        time:"1788/01/28 20:00",        
      },
      { 
        todo:"Practice chess",
        author:"Ron",
        time:"1788/01/28 20:00",        
      },
    ],

    doneList:[]   
  },

  mutations: { 
    removeTodoItem(state, todoItem){ 
      state.todoList = state.todoList.filter(remain=>remain !== todoItem)
    },

    removeDoneItem(state, doneItem){ 
      state.doneList = state.doneList.filter(remain=>remain !== doneItem)
    },

    addTodoItem(state, todoItem){
      state.todoList.unshift(todoItem)
    },
    
    moveUpTodoItem(state,todoItem){
      let i = state.todoList.indexOf(todoItem)-1
      if(i===-1){
        return
      }
      else{
        state.todoList.splice(i,2,state.todoList[i+1], state.todoList[i])
        return state.todoList
      }
    },

    moveDownTodoItem(state,todoItem){
      let i = state.todoList.indexOf(todoItem)
      if(i===state.todoList.length-1){
        return
      }
      else{
        state.todoList.splice(i,2,state.todoList[i+1], state.todoList[i])
        return state.todoList
      }
    },

    sortDone(state,todoItem){    
      let i = state.todoList.indexOf(todoItem)
      let doneItems = state.todoList.splice(i,1)
      state.doneList.push(doneItems[0])         
    },
    
    backDone(state,doneItem){    
      let i = state.doneList.indexOf(doneItem)
      let todoItems = state.doneList.splice(i,1)
      state.todoList.unshift(todoItems[0])         
    },
  },
 
  actions: {
  },
  modules: {
  }
})
