<template>
  <div class="modal-container">
    <i class="ph-x-circle"></i>
    <h2 class="modal-text">Edite sua tarefa ou exclua</h2>
    <form action="submit">
      <i class="ph-note-pencil"></i>
      <input type="text" />
      <i class="ph-check"></i>
      <i class="ph-trash"></i>
    </form>
  </div>
</template>

<script lang="ts">
export default {
name: "Modal"
}
</script>

<style scoped>

.modal-container {
  position: absolute;
  right: 50%;
  height: 341px;
  width: 494px;
  background-color: #1e1e1e;
  border-radius: 8px;
  border: 1px solid #FF003D;
  

}

</style>