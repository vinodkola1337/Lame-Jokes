<template>
    <div>
        <nuxt-link to="/jokes" class="underline">Back to jokes..</nuxt-link>
        <Joke :joke="joke"/>
    </div>
</template>

<script>
import Joke from "../../../components/joke";
import axios from "axios";

export default {
    components: {
        Joke
    },
    layout: 'base',
    data(){
        return{
            joke: {}
        }
    },
    async created(){
        const config = {
            headers: {
                'Accept':'application/json'
            }
        }

        try{
            const res = await axios.get(
                `https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
            this.joke = res.data.joke;
        }
        catch (err){
            console.log(err);
        }
    },
    head(){
        return {
            title: 'Single Jokes'
        }
    }
}
</script>

<style>

</style>