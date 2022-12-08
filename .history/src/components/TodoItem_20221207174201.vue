<template>
  <div class="tasks-container" >
    <radiobutton :checked="isCompleted" />
    <span class="tasks-text-unchecked">{{todo.title}}</span>
    <button class="tasks-timer">
      <i class="ph-timer"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Radiobutton from './Radiobutton.vue'
import StoreProps from '@/store'

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
    isCompleted: this.todo.isCompleted
  },
  methods: {
    changeState(){
      this.isCompleted = !todo.isCompleted
    }
  },
}
</script>