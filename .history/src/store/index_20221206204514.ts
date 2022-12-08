import { createStore } from 'vuex'

interface payloadProps {
  title: string,
  isFinish: boolean,
  todoTime?: number,
}

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos( state, payload ){
      state.todos = payload;
    },
    storeTodo( state, payload ){
      const index = state.todos.findIndex(todo => todo. === payload.id);
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
