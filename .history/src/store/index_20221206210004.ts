import { createStore } from 'vuex'

interface StoreProps {
  id: string,
  title: string,
  isCompleted: boolean,
}

export default createStore({
  state: {
    todos: <StoreProps[]
  },
  mutations: {
    storeTodos( state, payload ){
      state.todos = payload;
    },
    storeTodo( state, payload ){
      const index = state.todos.findIndex(todo => todo.id === payload.id);
      if(index >= 0){
        state.todos.splice(index, 1, payload);
      } else {
        state.todos.push(payload);
      }
    },
    deleteTodo( state, id ){
      const index = state.todos.findIndex(todo => todo.id === id);
      if(index >= 0){
        state.todos.splice(index, 1);
      }
    },
  },
})