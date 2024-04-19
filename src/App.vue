<template>
  <div id="app">
    <h1>Todo List</h1>
    <!-- apply -->
    <TodoList />
    <!-- <ul id="country_list">
      <li v-for="country in countries_list" :key="country.code" :value="country.code">
        {{ country.name }} ({{ country.code }})
      </li>
    </ul> -->
  </div>
</template>

<script>
//import
import TodoList from './components/TodoList.vue';

export default {
  // data() {
  //   return {
  //     countries_list: [
  //       { "name": "Canada", "code": "CAN" },
  //       { "name": "Mexico", "code": "MEX" },
  //       { "name": "United States of America", "code": "USA" }
  //     ]
  //   };
  // },
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
