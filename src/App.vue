<template>
  <router-view/>
</template>

<style lang="scss">
  .font{
    font-size: 1.5em;
  }
  .lightFont{
    color: #f6f2ee;
    text-shadow: 0 0 1px #3f4a4d;
  }
  .darkFont{
    text-shadow: 1px 1px 0 #EFECE9, 1px -1px 0 #EFECE9, -1px 1px 0 #EFECE9, -1px -1px 0 #EFECE9;
  }
  .sloganFont{
    color: #D3BC8E;
  }
  @font-face {
    font-family: "hk4e";
    src: url('./assets/hk4e_zh-cn.ttf');
  }



  body{
    cursor: url('./assets/ui/cursor.webp'), pointer;
    margin: 0;
    font-size: 1rem;
    background: url('@/assets/ui/background.webp') no-repeat;
    background-size: cover;
    background-position: center;
    user-select: none !important;
    height: 100vh;
    width: 100vw;
  }
  #app {
    font-family: 'hk4e';
    color: #565656;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }
</style>

<script setup>
  import { useRouter } from "vue-router";
  const { onMounted }=require("@vue/runtime-core");
  const router = useRouter()
  
  let loadCount = 0
  let assets = [
    require('@/assets/video/5starwish-single-export.mp4'),
    require('@/assets/video/5starwish-export.mp4'),
    require('@/assets/video/4starwish-single-export.mp4'),
    require('@/assets/video/4starwish-export.mp4'),
    require('@/assets/video/3starwish-single-export.mp4'),
  ]
  for (let asset of assets){
    let image = new Image()
    image.onload = () => {
      loadCount++
    }
    image.src = asset
    console.log(asset);
  }

  // 分开电脑手机页面
  onMounted(()=>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      // 如果是移动端，则跳转到移动端页面
      router.push({name: 'm_index',})
    }
    else {
      // 如果是PC端，则跳转到PC端页面
      router.push({name: 'pc_index',})
    }
  });
</script>