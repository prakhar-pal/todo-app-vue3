<template>
    <div v-if="totalTodos > 0"> Total todos: {{ totalTodos }}</div>
    <div v-else>No todos, yet!</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const totalTodos = computed(() => store.state.todos.length);
</script>