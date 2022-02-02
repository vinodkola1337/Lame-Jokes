<template>
  <div>
    <p class="">Welcome lads!</p>
    <p class="">You have reached the right place for lame jokes. You will be surprised seeing all the stuff in one place. </p>
    <br/>
    <p>Try our Jokes section to look out the lamest joke you need. </p>
  </div>
</template>

<script>
export default {
  layout: 'base',
  head(){
        return {
            title: 'Main',
            meta:[
                {
                    hid:"description",
                    name:"description",
                    content:"Main page for all your lames jokes"
                }
            ]
        }
    }
}
</script>
