<!-- src/components/myLoading/index.vue -->
<template>
  <!-- 添加name属性，以添加样式
  Transition 主要做一个淡入淡出的 -->
  <Transition name="zhLoading">
    <div v-if="show_toast" class="zh-loading-mark" :style="{ background: bgColor }">
      <div class="zh-loading-body">
        <div class="msg">
          {{ msg }}
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
const props = defineProps({
  show_toast: true,
  msg: "",
  // toast_type: "success",
  duration: 1500
});
const bgColor = 'rgba(43, 41, 39, 0.276)'
</script>
<style scoped lang="scss">
.zh-loading-mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .zh-loading-body {
    margin: auto;
    margin-top: 35vh;
    text-align: center;
  }

  /* transition标签样式添加 */
  .zhLoading-enter,
  .zhLoading-leave-to {
    opacity: 0;
  }

  .zhLoading-enter-active,
  .zhLoading-leave-active {
    transition: opacity 0.6s;
  }
}
</style>