  <!-- 下拉框触底加载自定义指令 -->
  <template>
    <div class="m-4">
      <p>第一个select</p>
      <el-select v-model="value" v-loadmore="loadmore1" :teleported="false" style="width:240px">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <p>第二个select</p>
      <el-select v-model="value" v-loadmore="loadmore2" :teleported="false" style="width:240px">
        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <p>第三个select</p>
      <el-select v-model="value" v-loadmore="loadmore3" :teleported="false" style="width:240px">
        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
  </template>

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue'

const options1 = ref([])
const options2 = ref([])
const options3 = ref([])
const value = ref([])
let pageData = reactive({
  pageIndex: 1,
  pageSize: 10
})
onMounted(() => {
  getOptions1()
  getOptions2()
  getOptions3()
})
const getOptions1 = () => {
  axios.get(`http://localhost:9999/getSelectOptions1?pageIndex=${pageData.pageIndex}&pageSize=${pageData.pageSize}`)
    .then(res => {
      if (res.data.length < 1) {
        ElMessage({
          message: '没有更多数据了...',
          type: "warning",
        });
      }
      const newOptions = res.data.map((item) => {
        return { value: item.name, label: item.index }
      })
      options1.value.push(...newOptions)
    })
}
const getOptions2 = () => {
  axios.get(`http://localhost:9999/getSelectOptions2?pageIndex=${pageData.pageIndex}&pageSize=${pageData.pageSize}`)
    .then(res => {
      if (res.data.length < 1) {
        ElMessage({
          message: '没有更多数据了...',
          type: "warning",
        });
      }
      const newOptions = res.data.map((item) => {
        return { value: item.name, label: item.index }
      })
      options2.value.push(...newOptions)
    })
}
const getOptions3 = () => {
  axios.get(`http://localhost:9999/getSelectOptions3?pageIndex=${pageData.pageIndex}&pageSize=${pageData.pageSize}`)
    .then(res => {
      if (res.data.length < 1) {
        ElMessage({
          message: '没有更多数据了...',
          type: "warning",
        });
      }
      const newOptions = res.data.map((item) => {
        return { value: item.name, label: item.index }
      })
      options3.value.push(...newOptions)
    })
}
// 触底了，继续发请求
const loadmore1 = () => {
  pageData.pageIndex = pageData.pageIndex + 1
  getOptions1()
}
const loadmore2 = () => {
  pageData.pageIndex = pageData.pageIndex + 1
  getOptions2()
}
const loadmore3 = () => {
  pageData.pageIndex = pageData.pageIndex + 1
  getOptions3()
}

</script>
