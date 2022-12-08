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
        payload.id = lastTodo.id
      } else {
        payload.id = 
      }
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
