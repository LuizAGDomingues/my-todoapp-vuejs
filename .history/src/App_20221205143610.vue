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
  </div>
</template>
