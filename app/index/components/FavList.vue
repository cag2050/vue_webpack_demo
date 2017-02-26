<template>
    <div>
        <div v-for="n in 10">div</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    #div1 {
        background:yellow;
    }
</style>