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
    <form action="submit">
      <label class="input-label">Digite sua tarefa:</label>
      <div class="input">
        <input class="input-box" type="text" />
        <button class="input-button" type="submit"></button>
      </div>
    </form>
    <span>Tarefas de hoje:</span>
    <div class="todos"></div>
  </div>
</template>
