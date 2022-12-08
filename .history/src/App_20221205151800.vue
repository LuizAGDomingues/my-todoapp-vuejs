<script lang="ts">
import Logo from './components/Logo.vue'
export default {
  components: {
    Logo,
  },
  name: "App",
}

</script>

<template>
  <div class="container">
    <div>
      <logo />
      <h1>Hello World</h1>
      <i class="ph-lightbulb"></i>
    </div>
    <span>Acompanhe aqui suas tarefas diárias!</span>
    <form action=""></form>
    <span>Tarefas de hoje:</span>
    <div class="todos"></div>
  </div>
</template>
