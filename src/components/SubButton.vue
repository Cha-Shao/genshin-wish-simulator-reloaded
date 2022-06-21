<template>
    <div class="subButton" @click="runFunction" :style="props.dark?'color: white':'color: #3B4255'">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    dark:{
        type: Boolean,
        default: false
    },
    runFunction: Function
})
</script>

<style lang="scss" scoped>
    .subButton{
        background: #E2DFD5;
        border-radius: 99px;
        font-size: 1.5em;
        padding: 0.33em;
        min-width: 8em;
        text-align: center;
        border: 0.03em solid #E7E7E5;
        margin: 0 7px;
        transition: 0.1s;
        &:hover{
            box-shadow: 0.07em 0.07em 0 white, -0.07em 0.07em 0 white, 0.07em -0.07em 0 white, -0.07em -0.07em 0 white, 0 0 0.07em white, 0 0 0.07em #DAD4CC inset;
        }
        &:active{
            background: #CBCABE;
            border: 0.03em solid #8996A5;
            box-shadow: 0.07em 0.07em 0 #8895A4, -0.07em 0.07em 0 #8895A4, 0.07em -0.07em 0 #8895A4, -0.07em -0.07em 0 #8895A4, 0 0 0.07em #8895A4, 0 0 0.07em #DAD4CC inset;
            color: white !important;
        }
    }
</style>