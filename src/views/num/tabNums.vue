<template>
  <div>我是输入框,按键 tab 则 切换输入框, 按键 ↑↓ 则 加减数值</div>
  <div v-for="item in list" :key="item.id">
    <el-input-number step-strictly ref="inputNumRef" v-model="item['num']" :min="0" :max="2" :step="0.5" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const list = ref([
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 2, num: 1 },
  { id: 2, num: 1 },
])
const inputNumRef = ref([]) // 实例ref
const initNum = ref(0)

// 让第某项获得焦点
const getFocus = (index) => {
  inputNumRef.value[index].focus()
}
onMounted(() => {
  getFocus(initNum.value)
  // 监听事件keydown,而不是keypress或keyup,因为无法阻止他们的默认事件
  window.addEventListener('keydown', handleKeyDown)
})
const handleKeyDown = (e) => {
  if (e.code === 'Tab') {
    // 阻止默认的Tab行为，如按tab会切换到地址栏
    e.preventDefault();
    initNum.value = initNum.value + 1
    // 超过输入框长度，则跳转到第一个输入框
    if (initNum.value == list.value.length) initNum.value = 0
    getFocus(initNum.value)
  }
}
onUnmounted(() => {
  // 有始有终，移除监听
  window.removeEventListener('keydown', handleKeyDown)
})
</script>