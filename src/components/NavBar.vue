<template>
    <nav>
        <ul class="flex">
            <li
                v-for="(link, index) in navLinks"
                :class="getClassForLinkItem(link, index)"
                class="px-1.5 border-b-2 border-solid">
                <router-link :to="link.path">{{ link.title}}</router-link>
            </li>
        </ul>
        <hr class="border-t-8 border-gray-600 my-2"/>
    </nav>
</template>

<style scoped>
    li.active {
        border-bottom-color: teal;
    }
</style>

<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    let navLinks = [
        {
            title: 'Home',
            path: '/'
        }, {
            title: 'About',
            path: '/about'
        }
    ];
    const route = useRoute();
    const currentPath = computed(() => route.path);

    function getClassForLinkItem(link, index){
        let cls = '';
        if(index != 0) cls+= ' mx-2';
        if(link.path === currentPath.value) cls+= ' active';
        return cls;
    }
</script>