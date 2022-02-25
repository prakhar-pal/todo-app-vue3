<script>
    import NavBar from './components/NavBar.vue';
    export default {
        name: 'App',
        components: {
            NavBar
        }
    }
</script>

<template>
    <div class="p-4">
       <NavBar />
        <router-view></router-view>
    </div>
</template>

<style>
    body {
        font-family: 'Roboto','Courier New', sans-serif, Courier, monospace;
        max-width: 500px;
        margin: 1rem auto;
    }
</style>
