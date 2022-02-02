<template>
    <button :class="buttonClassOpts()" :value="this.text">{{this.text}}</button> 
</template>

<script>
export default {
    name: 'Buttons',
    props: {
        kind: {
            type: String,
            default: 'primary',
            validator: val => ['', 'primary', 'secondary', 'danger'].includes(val),
        },
        text: {
            type: String,
            default: 'Button'
        }
    },
    computed: {
        buttonClassOpts(){
            var classes = "";
            return (opts = {}) =>  {
                if (this.kind === 'primary')
                {
                    classes = "bg-black text-white px-4 py-1 mx-2 rounded";
                }
                else if(this.kind === 'secondary')
                {
                    classes = "bg-blue-600 text-white px-4 py-1 mx-2 rounded";
                }
                else if(this.kind === 'danger')
                {
                    classes = "bg-red-600 text-white px-4 py-1 mx-2 rounded";
                }
                else {
                    classes = "bg-gray-600 text-white px-4 py-1 mx-2 rounded";
                }
                return classes;
            }
        }
    }
}
</script>

<style>

</style>