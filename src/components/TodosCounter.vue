<template>
    <div v-if="totalTodos > 0"> Total todos: {{ totalTodos }}</div>
    <div v-else>No todos, yet!</div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'TodosCounter',
    computed: {
        ...mapState(['todos']),
        totalTodos(){
            return this.todos.length;
        }
    }
}
</script>