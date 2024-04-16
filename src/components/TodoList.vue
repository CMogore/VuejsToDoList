<template>
<div>
    <AddTodo @add="addTodo" />
    <div v-for="(todo, index) in todos" :key="index">
        <!-- <TodoItem :todo="todo" @toggle-complete="toggleComplete" @delete="deleteTodo" /> -->
        <TodoItem :todo="todo" @toggle-complete="toggleComplete" @delete="deleteTodo">
            <template v-slot="{ text }">{{ text | capitalize }} </template></TodoItem>
    </div>

</div>
</template>

<script>
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';
import { TodoLoggingMixin } from './TodoLoggingMixin.js'; // Import the mixin

export default {
    mixins: [TodoLoggingMixin], // Use the mixin
    components: {
        AddTodo,
        TodoItem
    },
    data() {
        return {
            todos: []
        };
    },
    methods: {
        addTodo(newTodo) {
            this.todos.push({
                text: newTodo,
                completed: false
            });
            this.logTodoAction('Added', {  text: newTodo, completed: false }); // Log the action
        },
        toggleComplete(todo) {
            todo.completed = !todo.completed;
            this.logTodoAction('Completed', todo); // Log the action
        },
        deleteTodo(todoToDelete) {
            this.todos = this.todos.filter(todo => todo !== todoToDelete);
            this.logTodoAction('Deleted', todoToDelete); // Log the action
        }
    },
    //filter applied to format text
    filters: {
        capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.toUpperCase();
        }
    }
};
</script>
