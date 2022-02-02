<template>
<div>
    <SearchJokes v-on:Search-Submit="submitSearch"/>
    <Joke v-for="joke in jokes"
        :key="joke.id"
        :id="joke.id"
        :joke="joke.joke"/>
</div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/joke";
import SearchJokes from "../../components/SearchJokes";

export default {
    components:{
        Joke,
        SearchJokes
    },
    layout: 'base',
    data(){
        return {
            jokes: []
        };
    },
    async created(){
        const config = {
            headers: {
                'Accept':'application/json'
            }
        }

        try{
            const res = await axios.get('https://icanhazdadjoke.com/search', config);
            this.jokes = res.data.results;
        }
        catch (err){
            console.log(err);
        }
    },
    methods: {
        async submitSearch(text){
            const config = {
            headers: {
                'Accept':'application/json'
            }
        }

        try{
            const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config);
            this.jokes = res.data.results;
        }
        catch (err){
            console.log(err);
        }
        }
    },
    head(){
        return {
            title: 'Jokes List',
            meta:[
                {
                    hid:"description",
                    name:"description",
                    content:"All your lames jokes are here"
                }
            ]
        }
    }
};
</script>

<style>

</style>
