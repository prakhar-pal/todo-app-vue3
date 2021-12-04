<template>
    <div class="flex flex-col">
        <TodoForm @form-submitted="handleAddTodo" />
        <TodosCounter />
    </div>
    <div v-for="todo in todos" :key="todo.id" @dblclick="deleteTodo(todo.id)">
        <button @click="editTodoId = todo.id" class="bg-black text-white px-4">Edit</button> 
        <span class="todo-details ml-2 inline-block">
            {{ todo.id }} - {{ todo.text }}
            <button @click="deleteTodo(todo.id)" class="btn-delete-todo">X</button>
        </span>
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

<style>
    .todo-details {
        padding: 0.5rem;   
    }
    .todo-details > .btn-delete-todo {
        display: none;
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        border-radius: 50%;
        transition: all 0.5s;
    }

    .todo-details:hover > .btn-delete-todo {
        display: inline;
        background-color: rgb(206, 70, 70);
    }
    .todo-details:hover > .btn-delete-todo:hover {
        background-color: rgb(163, 17, 17);
        color: white;
    }
</style>

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
        ...mapActions(['addTodo', 'updateTodo', 'deleteTodo']),
        handleAddTodo(text) {
            let newTodo = { id: this.id, text  };
            this.id++;
            this.addTodo(newTodo);
        },
        editTodo(text) {
            this.updateTodo({ id: this.editTodoId, text});
            this.editTodoId = null;
        }
    },
}
</script>