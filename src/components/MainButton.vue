<template>
    <div class="mainButton" @click="runFunction">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    runFunction: Function
})
</script>

<style lang="scss" scoped>
    .mainButton{
        background: url('@/assets/ui/button/wish_button.webp');
        background-size: cover;
        color: #B4A08C;
        font-size: 1.5em;
        width: 14.6em;
        height: 3.4em;
        transition: 0.1s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:active{
            filter: brightness(0.95);
        }
    }
</style>