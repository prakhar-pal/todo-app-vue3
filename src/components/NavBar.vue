<template>
    <nav>
        <ul class="flex">
            <li
                v-for="(link, index) in navLinks"
                :class="getClassForLinkItem(link, index)"
                class="nav-link">
                <router-link :to="link.path">{{ link.title}}</router-link>
            </li>
        </ul>
        <hr class="border-t-8 border-gray-600"/>
    </nav>
</template>

<style scoped>
    li.nav-link {
        border-bottom: 2px solid transparent;
    }
    li.active {
        border-bottom-color: teal;
    }
</style>

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
        computed: {
            currentPath() {
                return this.$route.path;
            }
        },
        methods: {
            getClassForLinkItem(link, index){
                let cls = '';
                if(index != 0) cls+= ' mx-2';
                if(link.path == this.currentPath) cls+= ' active';
                return cls;
            }
        }
    }
</script>