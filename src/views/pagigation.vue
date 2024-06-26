<template>
  <hr class="my-4" />
  <el-button @click="router.go(-1)">返回</el-button>
  <div class="demo-pagination-block">
    <div class="demonstration">Jump to</div>
    <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :size="size"
      layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination v-pagi="'跳转'" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]" :size="size" layout="total, sizes, prev, pager, next, jumper" :total="400"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <el-pagination v-pagi="strPagi" v-model:current-page="currentPage4" v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]" :size="size" layout="total, sizes, prev, pager, next, jumper" :total="400"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
  <el-button @click="changePagiName">改分页器文字</el-button>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const size = ref('default')
const strPagi = ref('跳转')
const route = useRoute()
const router = useRouter()
const changePagiName = () => {
  strPagi.value = '略略'
  pageSize3.value = 50
  console.log(2);
}

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
</style>
