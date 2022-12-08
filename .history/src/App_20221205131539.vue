<script lang="ts">
import  PhLightbulb  from 'phosphor-vue'
import Logo from './components/Logo.vue'
export default {
  components: {
    Logo,
    PhLightbulb,
  },
  name: "App",
}

</script>

<template>
  <header>
    <logo />
    <h1>Hello World</h1>
    <ph-lightbulb :size="32" />
  </header>
</template>
