<template>
    <div>
      <h2>Todos</h2>
      <AddTodo @add="addTodo"/>
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" @toggle-complete="toggleComplete" @delete="deleteTodo">
          <template v-slot="{ text }">
            {{ text | capitalize }}
          </template>
        </TodoItem>
      </div>
      <p>Total Completed: {{ totalCompleted }}</p>
    </div>
  </template>
  
  <script>
  import AddTodo from './AddTodo.vue';
  import TodoItem from './TodoItem.vue';
  import { TodoLoggingMixin } from './TodoLoggingMixin.js';
  
  export default {
    mixins: [TodoLoggingMixin],
    components: {
      AddTodo,
      TodoItem
    },
    data() {
      return {
        todos: []
      };
    },
    computed: {
      totalCompleted() {
        return this.todos.filter(todo => todo.completed).length;
      }
    },
    methods: {
      addTodo(newTodo) {
        this.todos.push({ id: Date.now(), text: newTodo, completed: false });
        this.logTodoAction('Added', { id: Date.now(), text: newTodo, completed: false });
      },
      toggleComplete(todo) {
        todo.completed = !todo.completed;
      },
      deleteTodo(todo) {
        this.todos = this.todos.filter(item => item.id !== todo.id);
        this.logTodoAction('Deleted', todo);
      }
    },
    filters: {
      capitalize(value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    },
    watch: {
      todos: {
        handler(newTodos, oldTodos) {
          console.log('Todos changed:', newTodos, oldTodos);
        },
        deep: true
      }
    },
    created() {
      console.log('Component created');
    },
    mounted() {
      console.log('Component mounted');
    },
    updated() {
      console.log('Component updated');
    },
    destroyed() {
      console.log('Component destroyed');
    }
  };
  </script>
  