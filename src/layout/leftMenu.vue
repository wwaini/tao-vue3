<template>
  <div class="title-center">
    <img v-if="isShowMenuIcon" :src="logoSrc" class="logoC" />
    <span>周小姐</span>
  </div>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :background-color="theme_bgColor" router :collapse="isCollapse" text-color="auto" active-text-color="auto">
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">Home</span>
    </el-menu-item>
    <el-menu-item v-for="(item, index) in routeArr" :key="item.name" :index="item.path">
      <i class="el-icon-eleme"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { ref, reactive } from "vue";
import logoSrc from "@asset/logo.jpg";
const isShowMenuIcon = ref(true)
const routeArr = reactive([
  {
    name: 'one',
    path: '/num/one',
    meta: {
      title: '一叶'
    }
  },
  {
    name: 'two',
    path: '/num/two',
    meta: {
      title: '二叶'
    }
  },
  {
    name: 'three',
    path: '/num/three',
    meta: {
      title: '三叶'
    }
  },
  {
    name: 'four',
    path: '/num/four',
    meta: {
      title: '四叶'
    }
  },
  {
    name: 'five',
    path: '/num/five',
    meta: {
      title: '五叶'
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
  padding-top: 15px;
  width: 200px;
  text-align: left;
  line-height: 30px;
  background-color:#fff;
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
}
</style>