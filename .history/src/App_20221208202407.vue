<template>
  <div class="container">

    <header>
      <logo />
      <h1 class="title">DAILY TO DO</h1>
      <i class="ph-lightbulb logo-ph-size"></i>
    </header>

    <span class="subtitle">Acompanhe aqui suas tarefas diárias!</span>

    <form class="input" @submit.prevent="addTodo">
      <label class="input-label">Digite sua tarefa:</label>
      <div class="input-container">
        <i class="ph-notepad input-container-icon"></i>
        <input class="input-container-box" type="text" placeholder="Estudar..." v-model="title" />
        <button @click="addTodo" class="input-button" type="submit"><i class="ph-check-square input-button-icon"></i></button>
      </div>
    </form>

    <span>Tarefas de hoje:</span>

    <section class="tasks" v-if="$store.state.todos.length">
      <div v-for="todo in $store.state.todos" :key="todo.id">
        <todo-item :todo="todo" />
      </div>
    </section>

    <section class="empty" v-else>
      <span class="empty-text">Você ainda não possui tarefas.</span>
    </section>

  </div>
  
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  components: {
    Logo,
    TodoItem,
  },
  name: "App",
  data(){
    return {
      title: '',
      openModal: false,
    }
  },
  methods: {
    addTodo(){
      if(this.title.trim() === ''){
        return false;
      }
      const payload = {
        title: this.title,
        isCompleted: false,
      }
      this.$store.commit('storeTodo', payload)
      const cookiesArray = [this.$store.state.todos]
      this.$cookies.set("todos", this.$store.state.todos)
      this.title = ''
    },
  },
  mounted(){
    const todos = this.$cookies.get("todos")
    if(!todos || todos === null){
      return
    }
    this.$store.commit("storeTodos", todos)
    console.log(todos)
  },
}

</script>