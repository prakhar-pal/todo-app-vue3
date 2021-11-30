<template>
    <div class="max-w-lg mx-auto">
        <h3 class="text-xl text-center">A todo app written in VueJS 3</h3>
        <div class="max-w-sm my-4 mx-auto px-4 pb-8 about-details">
            <div>It has following features - </div>
            <hr />
            <ol class="mb-4 ml-8">
                <li>
                    Routing with: vue-router
                </li>
                <li>
                    State management: vuex
                </li>
            </ol>
        </div>
    </div>
</template>

<style scoped>
    .about-details {
        border: 1px solid #333;
        border-radius: 0.25rem;
    }
    li {
        list-style-type: decimal;
    }
</style>