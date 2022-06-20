<template>
    <div class="dataFrame lightFont">
        <img :src="require('@/assets/ui/icon/'+props.icon+'.webp')" alt="" class="icon">
        <span class="data">{{props.data}}</span>
        <img src="@/assets/ui/add.svg" alt="" class="add" @click="runFunction">
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Number,
        default: 0
    },
    icon: {
        type: String,
        default: ''
    },
    runFunction: Function
})
</script>

<style scoped lang="scss">
    .dataFrame{
        background: #00000066;
        border: 2px solid hsla(0,0%,100%,.267);
        border-radius: 99px;
        display: flex;
        align-items: center;
        padding: 1px 3px;
        margin: 0 0.7em;
        width: fit-content;
        .icon{
            width: 1.7em;
            height: 1.7em;
            margin-left: 4px;
        }
        .data{
            margin: 0 9px;
            font-size: 1.3em;
        }
        .add{
            background: #EDE5D8;
            padding: 3px;
            border-radius: 99px;
            width: 1em;
            height: 1em;
        }
    }
</style>