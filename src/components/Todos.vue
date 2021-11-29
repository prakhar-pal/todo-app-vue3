<template>
    <div class="flex flex-col">
        <TodoForm @form-submitted="handleSubmit" />
        <TodosCounter />
    </div>
    <div v-if="todos.length === 0">
        No todos, yet!
    </div>
    <div v-for="todo in todos" :key="todo.id" @dblclick="deleteTodo(todo.id)">
        <button @click="editTodoId = todo.id" class="bg-black text-white px-4">Edit</button> {{ todo.id }} - {{ todo.text }}
    </div>

    <div v-if="!!editTodoId">
        Edit todo: {{ editTodoId }}
        <TodoForm
            submit-btn-label="Edit"
            :initial-todo="editingTodo ? editingTodo.text: ''"
            @form-submitted="editTodo"
        />
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import TodoForm from './TodoForm.vue';
import TodosCounter from './TodosCounter.vue';
export default {
    name: "todo",
    components: { TodoForm, TodosCounter },
    data() {
        return {
            id: 1,
            editTodoId: null
        };
    },
    computed: {
        ...mapState(['todos']),
        editingTodo () {
            return this.todos.find(todo => todo.id === this.editTodoId);
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        handleSubmit(text) {
            let newTodo = { id: this.id, text  };
            this.id++;
            this.addTodo(newTodo);
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        editTodo(text) {
            const todo = this.todos.find(todo => todo.id === this.editTodoId);
            todo.text = text;
            this.editTodoId = null;
        }
    },
}
</script>