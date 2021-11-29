<template>
    <div> Total todos: {{ this.todos.length }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'TodosCounter',
    computed: mapState(['todos'])
}
</script>