<template>
  <div class="tasks-container" >
    <div class="tasks-input">
      <radiobutton :checked="isCompleted" @click="changeState" />
      <span @click="updateTodo" :class="{'tasks-text-unchecked': !isCompleted, 'tasks-text-checked': isCompleted}">{{todo.title}}</span>
    </div>
    <button class="tasks-timer">
      <i class="ph-timer" :class="{'timer-checked': isCompleted}"></i>
    </button>
  </div>

  <Modal v-if="openModal" />

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
    updateTodo(){
      const checkTodoIsCompleted = document.querySelector('.tasks-text-checked')
      i
    }
  },
}
</script>