<template>
  <div class="pcPage">
    <img src="@/assets/ui/button/arrow.svg" alt=">" height="50" class="arrow prev" @click="switchItem(-1)">
    <img src="@/assets/ui/button/arrow.svg" alt=">" height="50" class="arrow next"
    @click="switchItem(1)">
    <nav class="header">
      <div class="wishTitle header">
        <img src="@/assets/ui/wish.svg" alt="" class="logo">
        <span class="lightFont">祈愿</span>
      </div>
      <div class="tabs header">
        <div v-for="(cardPool, i) in config.cardPool" :key="i" class="tab" @click="switchTab(i, cardPool)"
        :class="i==switchNum?'active':''">
          <img :src="require('@/assets/ui/button/character/'+limit.limits[cardPool].star5[2]+'.webp')" alt="" class="character">
        </div>
      </div>
      <div class="datas header">
        <header-data icon="minimumGuarantee" :data="Math.ceil(Math.random()*10)" :runFunction="setMinimumGuarantee"/>
        <header-data icon="intertwined_fated" :data="Math.ceil(Math.random()*10)" :runFunction="addIntertwinedFated"/>
      </div>
    </nav>
    <div class="banners">
      <div class="bannerContainer" v-for="(banner, i) in config.cardPool" :key="i">
        <banner :bannerCode="i" v-if="i == switchNum" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import config from '@/config'
  import limit from '@/limit'
  import { ref } from 'vue'

  import HeaderData from '@/components/HeaderData.vue';
  import Banner from '@/components/Banner.vue';

  function setMinimumGuarantee(){
    console.log('setMinimumGuarantee');
  }

  function addIntertwinedFated(){
    console.log('addIntertwinedFated');
  }

  const switchNum = ref(0)
  const switchWho = ref(config.cardPool[0])

  function switchTab(i, cardPool) {
    switchNum.value = i
    switchWho.value = cardPool
  }

  function switchItem(switchCode){
    switchNum.value += switchCode
    if(switchNum.value < 0){
      switchNum.value = config.cardPool.length - 1
    } else if(switchNum.value >= config.cardPool.length){
      switchNum.value = 0
    }
  }
// defaultResult.star5.map((item)=>{item[0]})
</script>

<style scoped lang="scss">
.active{
  background: url('@/assets/ui/button/button_active.webp') no-repeat !important;
  background-size: 100% 100% !important;
  transform: scale(1.1);
  .character{
    mask-position: 0px 7px !important;
    transform: translateY(-7px) !important;
  }
}

.arrow{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.1s;
  z-index: 99;
  transform-origin: center 25%;
  &:active{
    opacity: 0.2;
  }
}
.prev{
  transform: rotate(180deg);
  left: 3em;
}
.next{
  right: 3em;
}

.pcPage {
  font-size: 1rem;
  height: 100vh;
  overflow: hidden;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    .wishTitle{
      .logo {
        width: 6em;
        height: 6em;
        margin-right: 20px;
      }
      span{
        font-size: 1.5em;
      }
    }
    .tabs{
      padding: unset;
      .tab{
        background: url("@/assets/ui/button/button_unactive.webp") no-repeat;
        width: 11em;
        height: 5em;
        background-size: 100% 100%;
        transition: 0.1s;
        margin: 0 1.1em;
        &:hover{
          transform: scale(1.1);
        }
        .character{
          width: 100%;
          height: 100%;
          mask-image: url('@/assets/ui/button/button_mask.webp');
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
          mask-position: 0px 0px;
          transform: translateY(0px);
          transition: 0.1s;
        }
      }
    }
    .datas{
      padding: unset;
    }
  }
  .banners{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    .bannerContainer{
      height: 100%;
    }
  }
}
</style>