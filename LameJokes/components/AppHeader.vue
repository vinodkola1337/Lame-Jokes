<template>
    <div>
        <header class="flex justify-between items-center mb-4 pb-4">
            <h1 class="align-bottom font-bold text-4xl">Lame Jokes</h1>
            <ul class="flex">
                <li>
                    <nuxt-link to="/" class="inline-block bg-black text-white px-4 py-1 mr-2"> Home </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about" class="inline-block bg-black text-white px-4 py-1 mr-2"> About </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/jokes" class="inline-block bg-black text-white px-4 py-1 mr-2"> Jokes </nuxt-link>
                </li>
            </ul> 
        </header>
        <hr/>
    </div>
</template>

<script>
export default {
    name:'AppHeader'
}
</script>

<style>
</style>