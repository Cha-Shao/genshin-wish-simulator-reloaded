<template>
    <div class="subButton" @click="runFunction" :class="props.dark?'dark':'light'">
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
        border-radius: 99px;
        padding: 0.33em;
        min-width: 8em;
        text-align: center;
        margin: 0 7px;
        transition: 0.1s;
    }
    .light{
        border: 0.03em solid #E7E7E5;
        background: #E2DFD5;
        color: #3B4255;
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
    .dark{
        border: 0.03em solid #E7E7E5;
        background: #4A5366;
        color: #ECE5D8;
        &:hover{
            box-shadow: 0.07em 0.07em 0 #FFE6B2, -0.07em 0.07em 0 #FFE6B2, 0.07em -0.07em 0 #FFE6B2, -0.07em -0.07em 0 #FFE6B2, 0 0 0.07em #FFE6B2,
            0.07em 0.07em 0 #FFE6B2 inset, -0.07em 0.07em 0 #FFE6B2 inset, 0.07em -0.07em 0 #FFE6B2 inset, -0.07em -0.07em 0 #FFE6B2 inset, 0 0 0.07em #FFE6B2 inset;
        }
        &:active{
            background: #FFECCB;
            border: 0.03em solid #BCB8B2;
            box-shadow: 0.07em 0.07em 0 #BCB8B2, -0.07em 0.07em 0 #BCB8B2, 0.07em -0.07em 0 #BCB8B2, -0.07em -0.07em 0 #BCB8B2, 0 0 0.07em #BCB8B2, 0 0 0.07em #DAD4CC inset;
            color: #A1927D !important;
        }
    }
</style>