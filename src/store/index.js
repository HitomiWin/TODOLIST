import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists:[
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
  },
  actions: {
  },
  modules: {
  }
})
