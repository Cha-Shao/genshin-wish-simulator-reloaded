<template>
    <div class="banner">
        <div class="bannerCode lightFont" :style="'background: #'+config.colors[limit.limits[config.cardPool[bannerCode]].star5[3]]">角色活动祈愿{{bannerCode!=0?'-'+bannerCode-1:''}}</div>
        <div class="background" :style="'background: url('+require('@/assets/ui/banner/banner_'+limit.limits[config.cardPool[bannerCode]].star5[3]+'.webp')+')'">
            <img :src="require('@/assets/character/'+limit.limits[config.cardPool[bannerCode]].star5[2]+'.webp')" alt="" class="mainCharacter">
            <div class="infos">
                <div class="title">
                    <span class="darkFont" :style="'color: #'+config.colors[limit.limits[config.cardPool[bannerCode]].star5[3]]">{{limit.limits[config.cardPool[bannerCode]].title.slice(0,2)}}</span>
                    <span class="darkFont">{{limit.limits[config.cardPool[bannerCode]].title.slice(2)}}</span>
                </div>
                <div class="notes">
                    <div class="rateUp">获取概率提升！</div>
                    <div class="mustHave lightFont" :style="'background: #'+config.colors[limit.limits[config.cardPool[bannerCode]].star5[3]]+'CC'">每十次祈愿必出四星或以上物品。</div>
                    <div class="about">活动限定五星角色仅在UP期间，通过对应祈愿获得。具体内容查看【详情】</div>
                </div>
                <div class="leftTime">
                    <div>剩余时间</div>
                    <div>∞</div>
                </div>
                <div class="characterInfo">
                    <div class="part1">
                        <img class="characterAttribute" :src="require('@/assets/ui/icon/'+limit.limits[config.cardPool[bannerCode]].star5[3]+'-color.svg')" :alt="limit.limits[config.cardPool[bannerCode]].star5[3]">
                        <span class="characterName lightFont">{{limit.limits[config.cardPool[bannerCode]].star5[4]}}</span>
                    </div>
                    <div class="stars">
                        <img v-for="i in 5" :key="i" src="@/assets/ui/icon/rarity.svg" alt="⭐" class="star">
                    </div>
                    <div class="slogan sloganFont">{{limit.limits[config.cardPool[bannerCode]].slogan}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/config'
    import limit from '@/limit'

    const props = defineProps({
        bannerCode: Number
    })
</script>

<style lang="scss" scoped>
    .banner{
        position: relative;
        height: 100%;
        .bannerCode{
            font-size: 1.5em;
            padding: 3px 12px;
            padding-right: 21px;
            width: fit-content;
            border-radius: 100px 0 200px 100px;
            position: absolute;
            top: -3px;
            left: -7px;
            z-index: 99;
        }
        .background{
            overflow: hidden;
            padding: 3.5em;
            border-radius: 17px;
            max-height: 560px;
            height: 35em;
            width: 74em;
            background-size: cover !important;
            position: relative;
            .mainCharacter{
                position: absolute;
                left: -30%;
                top: -15%;
                width: 160%;
                z-index: 0;
            }
            .infos{
                z-index: 99;
                position: relative;
                .title{
                    font-size: 5em;
                    margin-top: 0.2em;
                    z-index: 99;
                }
                .notes{
                    margin-top: 4.25em;
                    .rateUp{
                        font-size: 2.05em;
                    }
                    .mustHave{
                        margin-top: 0.3em;
                        font-size: 1.65em;
                        padding: 0 14px;
                        width: fit-content;
                    }
                    .about{
                        margin-top: 0.3em;
                        font-size: 1.5em;
                        max-width: 19em;
                    }
                }
                .leftTime{
                    position: absolute;
                    bottom: -10em;
                    font-size: 1.5em;
                }
                .characterInfo{
                    position: absolute;
                    left: 50%;
                    bottom: -10em;
                    z-index: 99;
                    .part1{
                        z-index: 99;
                        display: flex;
                        align-items: center;
                        left: -2.5em;
                        top: -2.75em;
                        .characterAttribute{
                            width: 5em;
                            height: 5em;
                        }
                        .characterName{
                            font-size: 4em;
                            position: relative;
                            white-space: nowrap;
                            &::after{
                                content: 'UP！';
                                font-size: 0.4em;
                                color: #FFFF58;
                                text-shadow: 1px 1px 0 #be6213, -1px 1px 0 #be6213, -1px -1px 0 #be6213, 1px -1px 0 #be6213;
                                position: absolute;
                            }
                        }
                    }
                    .stars{
                        background: #00000088;
                        position: absolute;
                        z-index: -1;
                        padding: 2.3em 1em 0.1em 2.1em;
                        left: 2.5em;
                        top: 2.5em;
                        width: 80%;
                        min-width: fit-content;
                        white-space: nowrap;
                        .star{
                            height: 1.8em;
                        }
                    }
                    .slogan{
                        font-size: 1.7em;
                        background: #38425C;
                        width: fit-content;
                        padding: 1px 7px;
                        box-sizing: border-box;
                        position: absolute;
                        left: 2.5em;
                        top: 135%;
                    }
                }
            }
        }
    }
</style>