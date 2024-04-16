<template>
    <div>
      <input v-model="newTodo"  placeholder="Add new todo">
    <button @click="addTodo">Add</button>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.$emit('add', this.newTodo);
          this.newTodo = '';
        }
      }
    }
  };
  </script>
  <style scoped>
  input[type="text"] {
    padding: 5px;
    margin-right: 10px;
  }
  
  button {
    padding: 5px 17px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  