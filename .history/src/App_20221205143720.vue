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
      <h1>Hello World</h1>
      <i class="ph-lightbulb"></i>
    </header>
    <span>Acompanhe aqui suas tarefas diárias!</span>
    <form action=""></form>
    <span>Tarefas de hoje:</span>
  </div>
</template>
