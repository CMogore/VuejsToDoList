<template>
    <div>
      <h2>Todos</h2>
      <AddTodo @add="addTodo"/>
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" @toggle-complete="toggleComplete" @delete="deleteTodo">
          <template #default="{ text }">
            {{ capitalize(text) }}
          </template>
        </TodoItem>
      </div>
      <p>Total Completed: {{ totalCompleted }}</p>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch } from 'vue';
  import AddTodo from './AddTodo.vue';
  import TodoItem from './TodoItem.vue';
  import { logTodoAction } from './TodoLoggingMixin.js';
  
  export default {
    components: {
      AddTodo,
      TodoItem
    },
    setup() {
      const todos = ref([]);
      
      const totalCompleted = computed(() => {
        return todos.value.filter(todo => todo.completed).length;
      });
      
      const addTodo = (newTodo) => {
        todos.value.push({ id: Date.now(), text: newTodo, completed: false });
        logTodoAction('Added', { id: Date.now(), text: newTodo, completed: false });
      };
      
      const toggleComplete = (todo) => {
        todo.completed = !todo.completed;
      };
      
      const deleteTodo = (todo) => {
        todos.value = todos.value.filter(item => item.id !== todo.id);
        logTodoAction('Deleted', todo);
      };
      
      watch(todos, (newTodos, oldTodos) => {
        console.log('Todos changed:', newTodos, oldTodos);
      }, { deep: true });
  
      // Define capitalize method
      const capitalize = (value) => {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      };
  
      // Apply the mixin
      
  
      return { todos, totalCompleted, addTodo, toggleComplete, deleteTodo, capitalize };
    }
  };
  </script>
  