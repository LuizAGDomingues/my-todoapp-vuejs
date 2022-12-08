<template>
  <div class="tasks-container" >
    <div class="tasks-input">
      <radiobutton :checked="isCompleted" @click="changeState" />
      <span @click="openEditModal" :class="{'tasks-text-unchecked': isCompleted === false, 'tasks-text-checked': isCompleted === true}">{{todo.title}}</span>
    </div>
    <button class="tasks-timer">
      <i class="ph-timer" :class="{'timer-checked': isCompleted}"></i>
    </button>
  </div>

  <Modal v-if="openModal" :todo="todo" @closeModal="closeModal" @updateTodo="updateTodo(newTodoTitle)" @deleteTodo="deleteTodo" />

</template>

<script lang="ts">
import Radiobutton from './Radiobutton.vue'
import Modal from './EditModal.vue'

export default {
  name: "TodoItem",
  components: {
    Radiobutton,
    Modal
  },
  props: {
    todo: {
      type: Object,
      default:() => ({}),
    }
  },
  data(){
    return{
      isCompleted: this.todo.isCompleted,
      openModal: false,
    }
  },
  methods: {
    changeState(){
      this.isCompleted = !this.isCompleted
    },
    updateTodo(newTodoTitle){
      const payload = {
        id: this.todo.id,
        title: this.todo.title,
        isCompleted: this.isCompleted,
      }
      this.$store.dispatch('updateTodo', payload)
    },
    deleteTodo(){
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