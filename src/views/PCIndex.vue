<template>
  <div class="pcPage">
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
      <banner v-for="(banner, i) in config.cardPool" :key="i" :bannerCode="i"/>
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
// defaultResult.star5.map((item)=>{item[0]})

function runFunction() {
  console.log('runFunction')
}
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
        width: 12em;
        height: 5.5em;
        background-size: 100% 100%;
        transition: 0.2s;
        margin: 0 12px;
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
          transition: 0.2s;
        }
      }
    }
    .datas{
      padding: unset;
    }
  }
}
</style>