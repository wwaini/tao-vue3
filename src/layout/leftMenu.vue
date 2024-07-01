<template>
  <div class="title-center left-bg">
    <img :src="logoSrc" class="logoC" />
    <span v-show="!col.isCollapse">周小姐</span>
  </div>
  <el-menu :default-active="route.path" class="el-menu-vertical-demo left-bg" @open="handleOpen" @close="handleClose"
    background-color="#ffffff" router :collapse="col.isCollapse" text-color="auto" active-text-color="auto">
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span slot="title">Home</span>
    </el-menu-item>
    <el-menu-item v-for="(item, index) in routeArr" :key="item.name" :index="item.path">
      <el-icon><component :is="item.meta.icon"></component></el-icon>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import logoSrc from "@asset/logo.jpg";
import { useCollapseStore } from '@store/isCollapse'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const col = useCollapseStore()
const route = useRoute()
const routeArr = reactive([
  {
    name: 'one',
    path: '/one',
    meta: {
      title: '一叶',icon:'Promotion'
    }
  },
  {
    name: 'two',
    path: '/two',
    meta: {
      title: '二叶',icon:'Promotion'
    }
  },
  {
    name: 'three',
    path: '/three',
    meta: {
      title: '三叶',icon:'Promotion'
    }
  },
  {
    name: 'four',
    path: '/four',
    meta: {
      title: '四叶',icon:'Promotion'
    }
  },
  {
    name: 'five',
    path: '/five',
    meta: {
      title: '五叶',icon:'Promotion'
    }
  },
])
const handleOpen = (key, keyPath) => { }
const handleClose = (key, keyPath) => { }
</script>

<style scoped lang="scss">

// 头像旋转
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.title-center {
  padding: 15px 0 0 10px;
  width: calc(100% - 1px);
  // text-align: left;
  display:flex;
  line-height: 30px;
}
.logoC:hover {
  cursor: pointer;
  animation-play-state: paused; //滚动动画暂停
}
.logoC {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  vertical-align: middle;
  margin-right: 5px;
  animation: donut-spin 10s linear infinite;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu-vertical-demo[data-v-8431c9bc]:not(.el-menu--collapse) {
  border: 0;
  height: 100vh;
}
.el-menu{
  height: 100vh;

}
</style>