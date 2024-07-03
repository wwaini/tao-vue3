<template>
  <div class="btn">
    <el-button @click="goStart">开始</el-button>
    <el-button @click="goEnd">停止</el-button>
  </div>
  <div class="a-box">定时器</div>
  <div class="b-box">Animation</div>
</template>
<script setup>
import { ref } from 'vue'
let leftNum = ref(0)
let flag = ref(false) // 定时器动画停止标识
let timmer // 定时器
let animationRef // requestAnimationFrame存储
// 定时器动画事件
const goAStart = () => {
  let dom = document.getElementsByClassName('a-box')
  dom[0].style.left = '10px'
  timmer = setInterval(() => {
    leftNum.value = parseInt(dom[0].style.left)
    if (leftNum.value > 800 || flag.value) {
      clearInterval(timmer)
    } else {
      dom[0].style.left = (leftNum.value + 3) + 'px'
      console.log(dom[0].style.left);
    }
  }, 17);
}
const goAEnd = () => {
  clearInterval(timmer)
}
// requestAnimationFrame动画事件
const goBStart = () => {
  let dom = document.getElementsByClassName('b-box')
  dom[0].style.left = '10px'
  const cb = () => {
    leftNum.value = parseInt(dom[0].style.left)
    if (leftNum.value > 800) {
    } else {
      dom[0].style.left = (leftNum.value + 3) + 'px'
      console.log(dom[0].style.left);
      animationRef = requestAnimationFrame(cb)
    }
  }
  requestAnimationFrame(cb)
}
const goBEnd = () => {
  cancelAnimationFrame(animationRef)
}

const goEnd = () => {
  goAEnd()
  goBEnd()
}
const goStart = () => {
  goAStart()
  goBStart()
}
</script>

<style scoped lang="scss">
.btn {
  text-align: center;
  margin-bottom: 20px;
}

.a-box {
  width: 50px;
  height: 80px;
  background-color: pink;
  position: absolute;
}

.b-box {
  width: 50px;
  height: 80px;
  background-color: blueviolet;
  color: #fff;
  position: absolute;
  top: 120px;
}
</style>