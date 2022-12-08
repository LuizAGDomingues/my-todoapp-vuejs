<script lang="ts">
import Logo from './components/Logo.vue'
import Modal from './components/EditModal.vue'
import Radiobutton from './components/Radiobutton.vue'

export default {
  components: {
    Logo,
    Radiobutton,
    Modal,
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
      if(!this.title){
        return false;
      }
      this.$store.commit('storeTodo', {
        title: this.title,
        isCompleted: false,
      })
      this.title = ''
    },
  },
}

</script>

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
        <button class="input-button" type="submit"><i class="ph-check-square input-button-icon"></i></button>
      </div>
    </form>

    <span>Tarefas de hoje:</span>

    <section class="tasks" v-if="$store.state.todos.length">
      <div>
        <div class="tasks-container" v-for="todo in $store.state.todo" :key="todo.id">
          <radiobutton :checked="todo.isCompleted" />
          <span class="tasks-text-unchecked">{{todo.title}}</span>
          <button class="tasks-timer">
            <i class="ph-timer"></i>
          </button>
        </div>
      </div>

      <div class="tasks-container">
        <radiobutton />
        <span class="tasks-text-unchecked">Concluir curso de figma</span>
        <button class="tasks-timer">
          <i class="ph-timer"></i>
        </button>
      </div>
      <div class="tasks-container">
        <radiobutton checked/>
        <span class="tasks-text-checked">Concluir curso de figma</span>
        <button class="tasks-timer">
          <i class="ph-timer timer-checked"></i>
        </button>
      </div>
    </section>

    <section class="empty" v-else>
      <span class="empty-text">Você ainda não possui tarefas.</span>
    </section>

  </div>

  <Modal v-if="openModal" />
  
</template>
