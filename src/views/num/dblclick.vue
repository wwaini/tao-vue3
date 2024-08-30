<template>
  <div>
    <test :tableData="tableData" v-if="DataFlag" @pushDataValue="pushDataValue"></test>
  </div>
</template>
<script setup>
import test from '@comp/dblclick/index.vue'
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

let tableData = reactive([]);
const DataFlag = ref(false);

onMounted(() => {
  axios.get('http://localhost:9999/getTableData').then(res => {
    tableData = res.data
    DataFlag.value = true;
  })
})
const pushDataValue = (val) => {
  // 修改值后,父组件获取data值
  console.log('val', val);
}
</script>

<style scoped lang="scss"></style>