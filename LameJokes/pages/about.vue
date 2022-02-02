<template>
    <div>
        <h1>Welcome!</h1>
        <p>This page is for lame jokes seekers</p>
    </div>
</template>

<script>
export default {
    layout: 'base',
    head(){
        return {
            title: 'Helow',
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