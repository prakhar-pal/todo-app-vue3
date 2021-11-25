<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="todo" />
        <input type="submit" :value="submitBtnLabel" />
    </form>
</template>

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
            }
        }
    }
</script>