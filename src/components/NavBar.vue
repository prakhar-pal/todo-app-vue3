<template>
    <nav>
        <ul class="flex">
            <li v-for="(link, index) in navLinks" :class="index != 0 ? 'mx-2': ''" class="nav-link">
                <router-link :to="link.path">{{ link.title}}</router-link>
            </li>
        </ul>
        <hr class="border-t-8 border-gray-600"/>
    </nav>
</template>

<script>
    let navLinks = [
        {
            title: 'Home',
            path: '/'
        }, {
            title: 'About',
            path: '/about'
        }
    ];
    export default {
        name: 'NavBar',
        data() {
            return { navLinks };
        },
        updated() {
            console.log(this.$router);
        }
    }
</script>