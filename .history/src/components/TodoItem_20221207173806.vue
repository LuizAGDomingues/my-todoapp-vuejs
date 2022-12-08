<template>
  <div class="tasks-container" >
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
  props: {
    todo: Object,
  },
  data(){
    
  },
  methods: {
    changeState(){

    }
  },
}
</script>