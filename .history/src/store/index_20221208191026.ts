import { createStore } from 'vuex'

interface StoreProps {
  id: number,
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
      const lastTodo = state.todos[state.todos.length - 1]
      if(lastTodo){
        payload.id = lastTodo.id + 1
      } else {
        payload.id = 0
      }
      state.todos.push(payload)
    },
    updateTodo( state, payload ){
      const index = state.todos.findIndex(todo => todo.id === payload.id);
      if(index >= 0){
        state.todos.splice(index, 1, payload);
      }
    },
    updateTodoCompleted( state, id ){

    },
    deleteTodo( state, id ){
      const index = state.todos.findIndex(todo => todo.id === id);
      if(index >= 0){
        state.todos.splice(index, 1);
      }
    },
  },
})
