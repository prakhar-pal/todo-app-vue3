<template>
    <div class="flex flex-col">
        <TodoForm @form-submitted="handleAddTodo" />
        <TodosCounter />
    </div>
    <div v-for="todo in todos" :key="todo.id" @dblclick="deleteTodo(todo.id)" class="todo-details">
        <button @click="onEditTodoClick(todo.id)" class="bg-black text-white px-4">Edit</button> 
        <span class="ml-2 inline-block">
            {{ todo.id }} - {{ todo.text }}
            <button @click="deleteTodo(todo.id)" class="btn-delete-todo">-</button>
        </span>
    </div>

    <div v-if="!!state.editTodoId">
        Edit todo: {{ state.editTodoId }}
        <TodoForm
            submit-btn-label="Edit"
            :initial-todo="editingTodo ? editingTodo.text: ''"
            @form-submitted="editTodo"
        />
    </div>
</template>

<style>
    .todo-details {
        padding: 0.5rem;   
    }
    .todo-details .btn-delete-todo {
        display: none;
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        border-radius: 50%;
        transition: all 0.5s;
    }

    .todo-details:hover .btn-delete-todo {
        display: inline;
        background-color: rgb(226, 3, 3);
    }
    .todo-details:hover .btn-delete-todo:hover {
        background-color: rgb(226, 3, 3);
        color: white;
    }
</style>

<script setup>
import { useStore } from 'vuex';
import TodoForm from './TodoForm.vue';
import TodosCounter from './TodosCounter.vue';
import { computed, reactive } from 'vue';
const store = useStore();
const state = reactive({
    id: 1,
    editTodoId: null
});

const todos = computed(() => store.state.todos)
const editingTodo = computed(() => todos.value.find(todo => todo.id === state.editTodoId));
const addTodo = (newTodo) => store.dispatch('addTodo', newTodo);

function updateTodo (newTodo) {
    store.dispatch('updateTodo', newTodo);
    state.editTodoId = null;
}
function handleAddTodo(text) {
    let newTodo = { id: state.id, text  };
    state.id++;
    addTodo(newTodo);
}
function editTodo(text) {
    updateTodo({ id: state.editTodoId, text});
    state.editTodoId = null;
}

const deleteTodo = (id) => store.dispatch('deleteTodo', id);
const onEditTodoClick = (id) => state.editTodoId = id;
</script>
