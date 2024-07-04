<template>
  <ul class="aaa">
    <li v-for="item in 50">{{ item }}</li>
  </ul>
  <el-button @click="goTop">回到顶部</el-button>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const goTop = () => {
  const cb = () => {
    requestAnimationFrame(cb)
  }
  requestAnimationFrame(cb)
}



// const goTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// let dom;

// onMounted(() => {
//   dom = document.querySelector(".aaa");
//   dom.addEventListener('scroll', handleScroll);

//   // 确保 dom 不为 null，即确保元素已存在
//   if (dom) {
//     console.log('DOM 已加载:', dom);
//   }
// });

// onBeforeUnmount(() => {
//   if (dom) {
//     dom.removeEventListener('scroll', handleScroll);
//   }
// });

// const handleScroll = () => {
//   console.log('滚动事件触发');
// }
</script>
<style scoped >

</style>