<template>
    <form @submit.prevent="submitForm" class="d-flex">
        <input
            type="text"
            v-model="state.todo"
            class="todo-text px-2 border border-gray-500 rounded-sm"
            placeholder="i.e. pet the cat"
        />
        <input
            type="submit"
            :value="props.submitBtnLabel"
            class="submit-button border border-solid rounded-sm border-green-950 box-border m-0.5 px-2 self-start"
        />
    </form>
</template>

<style scoped>
    .submit-button {
        border-color: teal;
    }
</style>

<script setup>
import { reactive, defineEmits } from 'vue';

const props = defineProps({
    initialTodo: {
        type: String,
        default: '',
    },
    submitBtnLabel: {
        type: String,
        default: "Submit"
    }
});

const $emit = defineEmits(['form-submitted']);

const state = reactive({
    todo: props.initialTodo ?? ''
});

function submitForm(){
    $emit('form-submitted', state.todo);
    state.todo = '';
}
</script>