<!-- about.vue -->
<template>
  <!-- <div v-taohtml:a="str">about</div> -->
  <el-button @click="onBtn">点击触发</el-button>
</template>
<script setup>
// import showLoading from '../components/myLoading/index.js';
import { inject, ref, onMounted, getCurrentInstance } from 'vue'
// const str = ref('周小姐∝')
// const testFn = inject('testFn')
// testFn()
// const testName = inject('testName')

const { proxy } = getCurrentInstance()
// proxy.testFn1()
console.log(22, proxy);
const onBtn = () => {
  proxy.$showLoading({
    msg: '努力加载鸭...',
    show_toast: true
  })
}

</script>