<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="todo" class="todo-text px-2" placeholder="i.e. pet the cat"/>
        <input type="submit" :value="submitBtnLabel" class="submit-button" />
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

<script>
    export default {
        props: {
            initialTodo: String,
            submitBtnLabel: {
                type: String,
                default: "Submit"
            }
        },
        data() {
            return {
                todo: this.$props.initialTodo || ''
            }
        },
        methods: {
            submitForm(){
                this.$emit('form-submitted', this.todo);
                this.todo = '';
            }
        }
    }
</script>