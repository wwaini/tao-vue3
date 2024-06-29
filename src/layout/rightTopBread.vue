<template>
    <div class="rightTop">
      <i @click="foldFn" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" class="iii"></i>
      <!--  v-if="!IsPhone" -->
    <el-breadcrumb style="margin-left: 6px" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="route.path !== '/index'">
      {{ route.meta.title }} / {{route.meta.affix ? "缓存" : "不缓存"}}
    </el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>
<script setup>
import { ref }from 'vue'
import { useRoute, useRouter }from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log(route.meta.title,router);
const isCollapse = ref(false)
const foldFn =() =>{}
</script>

<style scoped lang="scss">
.rightTop {
  width: 100%;
  height: 48px;
  background-color: var(--theme_bgColor);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 12px;
  position: relative;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
 .iii {
    font-size: 24px;
    cursor: pointer;
}
</style>  