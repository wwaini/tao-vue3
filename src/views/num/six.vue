  <!-- 下拉框触底加载自定义指令 -->
  <template>
    <div class="m-4">
      <p>default</p>
      <el-select v-model="value" v-loadmore="loadmore" :popper-append-to-body="true">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
  </template>

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue'


const list = ref([])
const options = ref([])
const option = ref([])
const value = ref([])
const loading = ref(false)
let pageData = reactive({
  pageIndex: 1,
  pageSize: 10
})
onMounted(() => {
  getOptions()
})
const getOptions = () => {
  axios.get(`http://localhost:9999/getSelectOptions?pageIndex=${pageData.pageIndex}&pageSize=${pageData.pageSize}`)
    .then(res => {
      const newOptions = res.data.map((item) => {
        return { value: item.name, label: item.index }
      })
      options.value.push(...newOptions)
    })
}
// 触底了，继续发请求
const loadmore = () => {
  pageData.pageIndex = pageData.pageIndex + 1
  getOptions()
}

</script>
