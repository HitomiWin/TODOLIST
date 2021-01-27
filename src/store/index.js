import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[
      {
        todo:"Learn magic",
        author:"Harry Potter",
        time:"1799/02/05 20:00",
        
      },
      {
        todo:"Make up with Ron",
        author:"Hermione",
        time:"1799/05/05  20:00",
        
      },
      {
        todo:"Feed the dragon",
        author:"Hagrid",
        time:"1799/05/05  20:00",
        
      },
      {
        todo:"Practice chess",
        author:"Ron",
        time:"1799/05/05 20:00",
        
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
