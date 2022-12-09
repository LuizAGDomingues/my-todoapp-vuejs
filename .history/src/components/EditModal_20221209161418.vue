<template>
  <div class="modal-container">
    <button class="modal-close" @click="$emit('closeModal')">
      <i class="ph-x-circle"></i>
    </button>
    <h2 class="modal-text">Edite sua tarefa ou exclua</h2>
    <form action="submit" @submit.prevent="updateTodo">
      <i class="ph-note-pencil icon-pencil"></i>
      <input type="text" v-model="newTodoTitle"/>
      <i class="ph-check icon-check" @click="updateTodo"></i>
      <i class="ph-trash icon-trash" @click="deleteTodo"></i>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "Modal",
  props: {
    todo: {
      type: Object,
      default:() => ({}),
    }
  },
  data(){
    return {
      newTodoTitle: this.todo.title,
    }
  },
  methods: {
    updateTodo(){
      this.$emit('updateTodo', this.newTodoTitle)
      this.$emit('closeModal')
    },
    deleteTodo(){
      this.$emit('deleteTodo')
      this.$emit('closeModal')
    }
  },
}
</script>

<style scoped>

.modal-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 17.5rem;
  width: 31rem;
  background-color: #1e1e1e;
  border-radius: 0.5rem;
  border: 2px solid #d10132;
  padding: 1.625rem;
}
.modal-close {
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 100%;
  margin-left: auto;
}
.modal-close i {
  font-size: 2rem;
  cursor: pointer;
}
.modal-close i:hover {
  color: #FF003D;
  transition: 300ms;
}
.modal-text {
  margin-top: 6px;
  margin-bottom: 48px;
  font-family: 'Inter';
  font-weight: semibold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  align-items: center;
}

form .icon-pencil {
  font-size: 32px;
  position: absolute;
  color: #000000;
  margin-left: 8px;
}

form input {
  height: 100%;
  width: 100%;
  background-color: #d0d0d0;
  border-radius: 8px;
  padding: 13px 52px;
  border: 1px solid #000000;
  font-family: 'Roboto';
  font-size: 1rem;
}

form input::placeholder {
  color: #4f4f4f;
  font-family: 'Roboto';
  font-size: 1rem;
}

form .icon-check {
  font-size: 32px;
  position: absolute;
  color: #000000;
  margin-left: 400px;
  cursor: pointer;
}

form .icon-trash {
  font-size: 32px;
  color: #FF0000;
  margin-left: 16px;
  cursor: pointer;
}

</style>