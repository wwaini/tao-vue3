<!-- 右键菜单功能 -->
<template>
  <div id="rightMenu">
    <ul class="table-right-menu">
      <li @click="fn1(item)" v-for="(item) in textList" :key="item.text">
        <el-icon :size="15">
          <View v-if="item.icon === 'view'" />
          <Edit v-if="item.icon === 'edit'" />
        </el-icon>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps, watch } from "vue";
const props = defineProps({
  textList: {
    type: Array,
    default: () => []
  },
  clickXY: {
    type: Object,
    default: () => { }
  }
})
const hide = (e) => {
  if (e.button === 0) {
    let positionXY = document.getElementById('rightMenu')
    positionXY.style.display = 'none'
    // 接触监听事件
    document.removeEventListener("mouseup", hide)
  }
}
const fn1 = (item) => {
  item.fnn(item);
}
watch(
  () => props.clickXY.position,
  (val) => {
    let x = val.x; // 获取x轴坐标
    let y = val.y; // 获取y轴坐标
    let innerWidth = window.innerWidth; // 获取页面可是区域宽度，即页面的宽度
    let innerHeight = window.innerHeight; // 获取可视区域高度，即页面的高度
    let menuHeight = props.textList.length * 30 // 弹窗高
    let menuWidth = 100 // 弹窗宽

    let positionXY = document.getElementById('rightMenu')
    positionXY.style.display = 'block'
    // 如果点击点 在视口最右方或者最下方 保证弹窗显示在视口内
    positionXY.style.top = (y + menuHeight > innerHeight ? innerHeight - menuHeight - 10 : val.y) + 'px'
    positionXY.style.left = (x + menuWidth > innerWidth ? innerWidth - menuWidth - 10 : val.x) + 'px'
    // false 表示 hide 这个事件处理函数将在鼠标点击（mouseup）事件的冒泡阶段被调用。
    // 如果为true，表示捕获阶段调用
    document.addEventListener("mouseup", hide, false);
  }
)
</script>
<style scoped>
#rightMenu {
  width: 108px;
  position: fixed;
  z-index: 999;
  display: none;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;

  .table-right-menu {
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    padding-left: 0;

    li {
      height: 30px;
      display: flex;
      justify-content: space-evenly;
      padding: 0 15px;
      align-items: center;
    }
  }
}
</style>