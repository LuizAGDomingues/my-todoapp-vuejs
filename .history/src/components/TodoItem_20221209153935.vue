<template>
  <div class="tasks-container" >
    <div class="tasks-input">
      <radiobutton :checked="isCompleted" @click="changeState" />
      <span @click="openEditModal" :class="{'tasks-text-unchecked': isCompleted === false, 'tasks-text-checked': isCompleted === true}">{{todoTitle}}</span>
    </div>
    <div class="tasks-timer">
      <cronometro />
      <i class="ph-timer" :class="{'timer-checked': isCompleted}" @click="clickTimer"></i>
    </div>
  </div>

  <Modal 
    v-if="openModal" 
    :todo="todo" 
    @closeModal="closeModal" 
    @updateTodo="(newTodoTitle) => {
      todoTitle = newTodoTitle;
      updateTodo();
    }" 
    @deleteTodo="deleteTodo" 
  />

</template>

<script lang="ts">
import Radiobutton from './Radiobutton.vue'
import Modal from './EditModal.vue'
import Cronometro from './Cronometro.vue'

export default {
  name: "TodoItem",
  components: {
    Radiobutton,
    Modal,
    Cronometro
  },
  props: {
    todo: {
      type: Object,
      default:() => ({}),
    }
  },
  data(){
    return{
      todoTitle: this.todo.title,
      isCompleted: this.todo.isCompleted,
      openModal: false,
    }
  },
  methods: {
    changeState(){
      this.isCompleted = !this.isCompleted
      this.updateTodo()
    },
    clickTimer(){

    },
    updateTodo(){
      const payload = {
        id: this.todo.id,
        title: this.todoTitle,
        isCompleted: this.isCompleted,
      }
      this.$store.commit('updateTodo', payload)
      const cookiesArray = this.$store.state.todos
      this.$cookies.set("todos", JSON.stringify(cookiesArray), "1d")
    },
    deleteTodo(){
      this.$store.commit('deleteTodo', this.todo.id)
      if(this.$store.state.todos.length === 0 || this.$store.state.todos.length === null) {
        this.$cookies.set("todos", '')
        return
      }
      const cookiesArray = this.$store.state.todos
      this.$cookies.set("todos", JSON.stringify(cookiesArray), "1d")
    },
    openEditModal(){
      if(this.isCompleted === true){
        return
      }
      this.openModal = true
    },
    closeModal(){
      this.openModal = false
    },
  },
}
</script>