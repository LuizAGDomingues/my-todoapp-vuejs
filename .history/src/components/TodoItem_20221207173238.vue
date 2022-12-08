<template>
  <div class="tasks-container" v-for="todo in $store.state.todos" :key="todo.id">
    <radiobutton :checked="todo.isCompleted" />
    <span class="tasks-text-unchecked">{{todo.title}}</span>
    <button class="tasks-timer">
      <i class="ph-timer"></i>
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
  
}
</script>

<style>

</style>