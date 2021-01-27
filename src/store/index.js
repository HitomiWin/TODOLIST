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
        
      },
      {
        todo:"Make up with Ron",
        author:"Hermione",
        time:new Date().toLocaleString(),
        
      },
      {
        todo:"Feed the dragon",
        author:"Hagrid",
        time:new Date().toLocaleString(),
        
      },
      {
        todo:"Practice chess",
        author:"Ron",
        time:new Date().toLocaleString(),
        
      },
    ]
  },
  mutations: { 
    removeTodoItem(state, todoItem){ 
      state.todoList = state.todoList.filter(remain=>remain !== todoItem)
    },

    addTodoItem(state, todoItem){
      state.todoList.push(todoItem)
    },

    // getTime(state){
    //   state.todoList.todoItem.time=new Date()
    // }
  },
  actions: {
  },
  modules: {
  }
})
