<template>
<div>
    <input v-model="newTodo" placeholder="Add new todo">
    <button @click="addTodo">Add</button>
</div>
</template>

<script>
import {
    ref
} from 'vue';

export default {
    setup(props, {
        emit
    }) {
        const newTodo = ref('');

        const addTodo = () => {
            if (newTodo.value.trim() !== '') {
                emit('add', newTodo.value);
                newTodo.value = '';
            }
        };

        return {
            newTodo,
            addTodo
        };
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
