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
      <h1>DAILY TO DO</h1>
      <i class="ph-lightbulb ph-size"></i>
    </header>
    <span class="">Acompanhe aqui suas tarefas diárias!</span>
    <form action=""></form>
    <span>Tarefas de hoje:</span>
    <div class="todos"></div>
  </div>
</template>
