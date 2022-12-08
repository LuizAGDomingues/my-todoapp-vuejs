<template>
  <div class="tasks-container" >
    <div class="tasks-input">
      <radiobutton :checked="isCompleted" @click="changeState" />
      <span @click="openModal" :class="{'tasks-text-unchecked': !isCompleted, 'tasks-text-checked': isCompleted}">{{todo.title}}</span>
    </div>
    <button class="tasks-timer">
      <i class="ph-timer" :class="{'timer-checked': isCompleted}"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Radiobutton from './Radiobutton.vue'

export default {
  name: "TodoItem",
  components: {
    Radiobutton
  },
  props: {
    todo: {
      type: Object,
      default:() => ({}),
    }
  },
  data(){
    return{
      isCompleted: this.todo.isCompleted
    }
  },
  methods: {
    changeState(){
      this.isCompleted = !this.isCompleted
    }
  },
}
</script>