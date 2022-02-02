<template>
    <div>
        <form class="flex" @submit.prevent="onSubmit">
            <input type="text" class="border rounded bg-gray-200 ml-4" name="SearchBox" placeholder="Search keyword..." v-model="SearchKey">
            <Buttons :kind="Kind" :text="Text"></Buttons>
        </form>
    </div>
</template>

<script>
import Buttons from "./Buttons";

export default {
    components: {
        Buttons
    },
    name: "SearchJokes",
    data(){
        return {
            SearchKey: "",
            Kind: "primary",
            Text: "Search"
        }
    },
    methods : {
        onSubmit() {
            this.$emit('Search-Submit', this.SearchKey);
            this.SearchKey = "";
        }
    }
}
</script>

<style>

</style>