<template>
    <nuxt-link :to="'/jokes/'+id">
        <div class="border-dotted border border-[#000] p-4 m-4">
            <p>{{joke}}</p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name:'Joke',
    props:['joke','id']
}
</script>

<style>
</style>