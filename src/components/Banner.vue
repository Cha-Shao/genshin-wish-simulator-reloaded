<template>
    <div class="banner">
        <div class="bannerCode lightFont" :style="'background: #'+config.colors[limit.limits[config.cardPool[bannerCode]].star5[3]]">角色活动祈愿{{bannerCode!=0?'-'+bannerCode-1:''}}</div>
        <div class="background" :style="'background: url('+require('@/assets/ui/banner/banner_'+limit.limits[config.cardPool[bannerCode]].star5[3]+'.webp')+')'">
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
            .infos{
                z-index: 10;
                .title{
                    font-size: 5em;
                    margin-top: 0.2em;
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
                        max-width: 57%;
                    }
                }
                .leftTime{
                    position: absolute;
                    bottom: 2em;
                    font-size: 1.5em;
                }
            }
        }
    }
</style>