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
      <h1 class="title">DAILY TO DO</h1>
      <i class="ph-lightbulb logo-ph-size"></i>
    </header>
    <span class="subtitle">Acompanhe aqui suas tarefas diárias!</span>
    <form action="submit" class="input">
      <label class="input-label">Digite sua tarefa:</label>
      <div class="input-container">
        <i class=""></i>
        <input class="input-box" type="text" placeholder="Estudar..." />
        <button class="input-button" type="submit" style="background:transparent;border:none"><i class="ph-check-square input-ph-size"></i></button>
      </div>
    </form>
    <span>Tarefas de hoje:</span>
    <div class="todos"></div>
  </div>
</template>
