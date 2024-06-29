<template>
    <div class="rightTop">
      <el-icon><Menu  @click="foldFn" :class="col.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" class="iii"/></el-icon>
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
import { useCollapseStore } from '@store/isCollapse'
const col = useCollapseStore()
const route = useRoute()
const router = useRouter()
const foldFn =() =>{
  col.openCollapse()
}
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
    // width:20px;
    // height:20px;
    font-size: 24px;
    cursor: pointer;
    // background-color:#000;
}
</style>  