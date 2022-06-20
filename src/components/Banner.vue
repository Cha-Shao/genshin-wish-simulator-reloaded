<template>
    <div class="banner">
        <div class="title lightFont">角色活动祈愿{{bannerCode!=0?'-'+bannerCode-1:''}}</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        bannerCode: Number
    })
</script>

<style lang="scss" scoped>
    .banner{
        position: relative;
        .title{
            font-size: 1.5em;
            padding: 3px 12px;
            padding-right: 21px;
            background: red;
            width: fit-content;
            border-radius: 100px 0 200px 100px;
        }
    }
</style>