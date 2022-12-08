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
    <header>
      <logo />
      <h1 title>DAILY TO DO</h1>
      <i class="ph-lightbulb ph-size"></i>
    </header>
    <span class="subtitle">Acompanhe aqui suas tarefas diárias!</span>
    <form action="">
      <label for=""></label>
      <input type="text" />
    </form>
    <span>Tarefas de hoje:</span>
    <div class="todos"></div>
  </div>
</template>
