<template>
    <div class="flex flex-col mt-4">
        <TodoForm @form-submitted="handleAddTodo" />
        <TodosCounter class="mt-2 mb-4"/>
    </div>
    <table class="w-full border border-b-0 p-4" v-if="todos.length">
        <thead>
            <tr class="border-b mx-4">
                <td>#</td>
                <td>Todo</td>
                <td class="text-right">Actions</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todos" :key="todo.id" @dblclick="deleteTodo(todo.id)" class="todo-details border-b">
                <td>{{ todo.id }}</td>
                <td>{{ todo.text }}</td>
                <td class="float-right">
                    <button
                        @click="deleteTodo(todo.id)"
                        class="btn-delete-todo mr-2 w-6 h-6 rounded-full transition-all bg-red-600 hover:bg-red-800 text-white"
                    >
                        {{ "-" }}
                    </button>
                    <button @click="onEditTodoClick(todo.id)" class="bg-black text-white px-4">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-if="!!state.editTodoId" class="mt-4">
        Edit todo: {{ state.editTodoId }}
        <TodoForm submit-btn-label="Edit" :initial-todo="editingTodo ? editingTodo.text : ''" @form-submitted="editTodo" />
    </div>
</template>

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

function updateTodo(newTodo) {
    store.dispatch('updateTodo', newTodo);
    state.editTodoId = null;
}
function handleAddTodo(text) {
    let newTodo = { id: state.id, text };
    state.id++;
    addTodo(newTodo);
}
function editTodo(text) {
    updateTodo({ id: state.editTodoId, text });
    state.editTodoId = null;
}

const deleteTodo = (id) => {
    store.dispatch('deleteTodo', id);
    state.editTodoId = null;
}
const onEditTodoClick = (id) => state.editTodoId = id;
</script>
