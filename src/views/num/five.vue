<template>
  <div id="mse"></div>
</template>
<script setup>
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css'; // 引入西瓜视频样式
import { onMounted, getCurrentInstance } from "vue";
let player
const { proxy } = getCurrentInstance()

onMounted(() => {
  // 初始化需要在onMounted中
  player = new Player({
    id: 'mse',
    autoplay: false,
    volume: 0.3,
    url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
    poster: "http://localhost:9999/src/asset/logo.jpg",
    playsinline: true,
    rotate: {   //视频旋转按钮配置项
      innerRotate: true, //只旋转内部video
      clockwise: false // 旋转方向是否为顺时针
    },
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
  });
  player.on('rotate', function (deg) {
    console.log(deg);// 旋转时会触发rotate事件，角度有四个值90，180，270，0
  })
})
</script>

<style scoped lang="scss"></style>