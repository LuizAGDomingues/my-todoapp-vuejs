import { createStore } from 'vuex'

interface StoreProps {
  id: string,
  title: string,
  isCompleted: boolean,
  timePass?: number,
}

export default createStore({
  state: {
    todos: <StoreProps[]>[]
  },
  mutations: {
    storeTodos( state, payload ){
      state.todos = payload;
    },
    storeTodo( state, payload ){
      const lastId = state.todos.findIndex()
      state.todos.push(payload)
    },
    deleteTodo( state, id ){
      const index = state.todos.findIndex(todo => todo.id === id);
      if(index >= 0){
        state.todos.splice(index, 1);
      }
    },
  },
})
