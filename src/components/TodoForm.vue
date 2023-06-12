<template>
    <form @submit.prevent="submitForm" class="d-flex">
        <input type="text" v-model="state.todo" class="todo-text px-2" placeholder="i.e. pet the cat"/>
        <input type="submit" :value="props.submitBtnLabel" class="submit-button" />
    </form>
</template>

<style>
    .todo-text {
        border: 2px solid #333;
        border-radius: 2px;
    }

    .submit-button {
        border: 2px solid teal;
        border-radius: 2px;
        box-sizing: border-box;
        margin: 2px;
        padding: 0 8px;
        align-self: center;
    }
</style>

<script setup>
import { reactive, defineEmits, watch } from 'vue';

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