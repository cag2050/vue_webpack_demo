<template>
<div id='#div1'>
     <div v-for="n in 10">{{ name }}</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            msg:'hello world!'
        }
    }
}
</script>

<style>
    #div1 {
        background:red;
    }
</style>