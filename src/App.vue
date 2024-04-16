<template>
  <div id="app">
    <h1>Todo List</h1>
    <!-- apply -->
    <TodoList />
  </div>
</template>

<script>
//import
import TodoList from './components/TodoList.vue';

export default {
  components: {
    //declare
    TodoList
  }
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}
</style>