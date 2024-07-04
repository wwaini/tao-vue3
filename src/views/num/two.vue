<!-- 自定义指令 -->
<template>
  <h4>修改innerText自定义指令</h4>
  <div>{{ originalText }}</div>
  <div v-taohtml="customText">{{ originalText }}</div>

  <hr class="my-4" />
  <h4>修改分页器Go文字自定义指令</h4>
  <div class="demo-pagination-block">
    <div class="demonstration">Jump to</div>
    <el-pagination v-pagi="'You Jump, I Jump!'" v-model:current-page="currentPage3" v-model:page-size="pageSize3"
      :size="size" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination v-pagi="'You Jump, I Jump!'" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]" :size="size" :disabled="disabled" :background="background"
      layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
  <h4>图片懒加载自定义指令</h4>
  <div class="imgBox">
    <img class="image" v-layload="img" v-for="img in imgList" :key="img">
  </div>
</template>

<script setup>
import { ref } from 'vue'
const customText = ref('我是自定义指令修改的值')
const originalText = ref('我是插值语法的文字')
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)
const imgList = [
  {
    src: "http://ashuai.work:10000/imgSrc/html.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/css.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/js.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/nodejs.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/webpack.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/vue.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/react.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/angular.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/ie.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/chrome.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/firefox.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/safari.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/edge.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/http.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/uniapp.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/wx.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/leetcode.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/java.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/spring.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/mybatis.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/redis.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/mysql.png",
  },
  {
    src: "http://ashuai.work:10000/imgSrc/oracle.png",
  },
  {
    src: "占位",
  }
]

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>
<style scoped>
.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.imgBox {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.image {
  width: 200px;
  height: 200px;
}
</style>