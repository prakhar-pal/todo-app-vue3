<template>
    <div v-if="todos.length === 0">
        There're no todos!
    </div>
    <TodoForm @form-submitted="addTodo" />
    <div v-for="todo in todos" :key="todo.id" @dblclick="deleteTodo(todo.id)">
        <button @click="editTodoId = todo.id">Edit</button> {{ todo.id }} - {{ todo.text }}
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
    import TodoForm from './TodoForm.vue';
    export default {
    name: "todo",
    data() {
        return {
            id: 1,
            editTodoId: null,
            todo: "",
            todos: []
        };
    },
    computed: {
        editingTodo () {
            return this.todos.find(todo => todo.id === this.editTodoId);
        }
    },
    methods: {
        addTodo(text) {
            let newTodo = { id: this.id, text  };
            this.id++;
            this.todos.push(newTodo);
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
    components: { TodoForm }
}
</script>