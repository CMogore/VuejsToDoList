<template>
    <div class="item">
      <input type="checkbox" :checked="todo.completed" @change="toggleComplete">
      <span :class="{ completed: todo.completed }">
        <!-- slots -->
        <slot :text="todo.text"></slot>
      </span>
      <button @click="deleteTodo">Delete</button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleComplete() {
        this.$emit('toggle-complete', this.todo);
      },
      deleteTodo() {
        this.$emit('delete', this.todo);
      }
    }
  });
  </script>
  
  <style scoped>
  .item {
    margin-top: 30px;
    text-align: center;
  }
  
  .todo-item {
    margin-bottom: 10px;
  }
  
  .completed {
    text-decoration: line-through;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #f44336;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  