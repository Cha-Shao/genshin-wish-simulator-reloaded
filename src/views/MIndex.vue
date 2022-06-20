<template>
  <div class="mPage">
    <nav class="header">
      <div class="wishTitle">
        <img src="@/assets/ui/wish.svg" alt="" class="logo">
      </div>
      <div class="tabs">
        <div v-for="(cardPool, i) in config.cardPool" :key="i" class="tab" @click="switchTab(i, cardPool)"
        :class="i==switchNum?'active':''">
          <img :src="require('@/assets/ui/button/character/'+limit.limits[cardPool].star5[2]+'.webp')" alt="" class="character">
        </div>
      </div>
    </nav>
    <div class="datas">
      <header-data icon="minimumGuarantee" :data="Math.ceil(Math.random()*10)" :runFunction="setMinimumGuarantee"/>
      <header-data icon="intertwined_fated" :data="Math.ceil(Math.random()*10)" :runFunction="addIntertwinedFated"/>
    </div>
    <div class="banners">
      <banner v-for="(banner, i) in config.cardPool" :key="i" :bannerCode="i"/>
    </div>
  </div>
</template>

<script setup>
  import config from '@/config'
  // defaultResult.star5.map((item)=>{item[0]})
  import limit from '@/limit'
  import { onMounted, ref } from 'vue'

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
    mask-position: 0px 4px !important;
    transform: translateY(-4px) !important;
  }
}
.mPage {
  font-size: .5rem;
  height: 100vw;
  overflow: hidden;
  transform: rotate(90deg);
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 15.625vh;
    height: 100%;
    background: url('@/assets/ui/m_header_bg.svg') no-repeat;
    background-size: auto 100vw;
    background-position: center;
    position: fixed;
    left: 2vh;
    .wishTitle{
      flex-direction: row;
      position: relative;
      &::after{
        content: "祈愿";
        position: absolute;
        font-size: 1em;
        left: 7em;
        white-space: nowrap;
        top: 50%;
        transform: translateY(-50%);
        color: #f6f2ee;
        text-shadow: 0 0 1px #3f4a4d;
      }
      .logo {
        width: 5em;
        height: 5em;
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
        margin: 7px 0;
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
  }
  .datas{
    display: flex;
    position: absolute;
    top: 2em;
    right: 10em;
  }
  .banners{
    margin-left: 20vh;
    margin-top: 15vw;
  }
}
</style>