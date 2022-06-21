<template>
<div class="container">
    <div class="card" :class="rotate?'rotate':''">
        <img src="@/assets/ui/background_horn.webp" alt="" class="leftTop">
        <img src="@/assets/ui/background_horn.webp" alt="" class="rightTop">
        <img src="@/assets/ui/background_horn.webp" alt="" class="leftBottom">
        <img src="@/assets/ui/background_horn.webp" alt="" class="rightBottom">
        <div class="hr"></div>
        <h1 class="title">{{$props.title}}</h1>
        <div class="hr"></div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Example'
    },
    rotate: Boolean
})
</script>

<style lang="scss" scoped>
    .rotate{
        transform: rotate(90deg) translateY(-50%);
        right: -50%;
        transform-origin: 0% 0%;
    }
    .container{
        z-index: 100;
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: #00000088;
        display: flex;
        justify-content: center;
        align-items: center;
        .card{
            position: relative;
            background: #E5E1DC;
            padding: 37px;
            text-align: center;
            border-radius: 21px;
            min-width: 20vw;
            .hr{
                content: '';
                height: 2px;
                width: 100%;
                background: #D8D2C8;
                margin: 5px 0;
            }
            .title{
                font-size: 2.2em;
                font-weight: normal;
                margin: 7px 0;
            }
            .content{
                font-size: 1.5em;
                margin: 3px 0;
            }
        }
    }
    .leftTop{
        position: absolute;
        left: -20px;
        top: -18px;
        transform: rotate(-90deg);
    }
    .rightTop{
        position: absolute;
        right: -20px;
        top: -18px;
    }
    .leftBottom{
        position: absolute;
        left: -20px;
        bottom: -18px;
        transform: rotate(-180deg);
    }
    .rightBottom{
        position: absolute;
        right: -20px;
        bottom: -18px;
        transform: rotate(90deg);
    }
</style>