<template>
  <div>
    <!-- @contextmenu.prevent 阻止默认事件 -->
    <el-table @row-contextmenu="rightClickFn" @contextmenu.prevent :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <right-menu :textList="textList" :clickXY="clickXY"></right-menu>
  </div>
</template>
<script setup>
import rightMenu from '@comp/rightMenu/index.vue'
import { reactive, ref } from 'vue';
let tableData = reactive([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
const textList = reactive([])
const clickXY = reactive({})
const rightClickFn = (row, column, event) => {
  Object.assign(textList,
    [
      {
        // 使用回调函数的方式fnn，定义在父组件，在子组件调用即可触发
        icon: 'view', text: '只读', fnn: view,
        params: { row, column, event }
      },
      {
        icon: 'edit', text: '编辑', fnn: edit,
        params: { row, column, event }
      }
    ]
  )
  Object.assign(clickXY,
    {
      position: {
        x: event.clientX,
        y: event.clientY
      }
    }
  )
}
const view = (val) => {
  console.log('view-----', val);
}
const edit = (val) => {
  console.log('edit-----', val);
}
</script>

<style scoped lang="scss"></style>