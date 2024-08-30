<!-- table表格左键双击，单元格可编辑效果 -->
<template>
  <el-table max-height="650" :data="tableData">
    <el-table-column :show-overflow-tooltip="true" prop="date" label="日期" sortable width="250">
      <template #default="{ row, column }">
        <div @dblclick="editCell(row, column)">
          <!-- 此处虽然可能频繁改变，但因只能处理一个实例input，只能使用v-if -->
          <span v-if="!row.edit_date">{{ row.date }}</span>
          <el-input ref="enddateinputRefs" @keyup.enter.native="(e) => e.target.blur()" @blur="cellBlur(row, column)"
            v-if="row.edit_date" v-model="row.date"></el-input>
        </div>
      </template>
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true" prop="name" label="姓名" sortable width="250">
      <template #default="{ row, column }">
        <div @dblclick="editCell(row, column)">
          <!-- 此处虽然可能频繁改变，但因只能处理一个实例input，只能使用v-if -->
          <span v-if="!row.edit_name">{{ row.name }}</span>
          <el-input ref="valueinputRefs" @keyup.enter.native="(e) => e.target.blur()" @blur="cellBlur(row, column)"
            v-if="row.edit_name" v-model="row.name"></el-input>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, nextTick, getCurrentInstance, defineEmits, reactive } from 'vue';
// 获取当前组件的实例
const { proxy } = getCurrentInstance();
const props = defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
})

const enddateinputRefs = ref();
const valueinputRefs = ref();

const emit = defineEmits(['pushDataValue'])
// 左键双击改变单元格为输入框,且该实例获取焦点
const editCell = (row, column) => {
  if (column.property === 'date') {
    row.edit_date = true;
    nextTick(() => {
      // 以下2种方法可以实现,一直只有一个ref实例
      enddateinputRefs.value.focus(); // proxy.$refs.enddateinputRefs.focus()
    })
  } else if (column.property === 'name') {
    row.edit_name = true;
    nextTick(() => {
      // 以下2种方法可以实现,一直只有一个ref实例
      valueinputRefs.value.focus(); // proxy.$refs.valueinputRefs.focus()
    })
  }
}
// 失去焦点，并将table data数据emit给父组件
const cellBlur = (row, column) => {
  if (column.property === 'date') {
    row.edit_date = false;
  } else if (column.property === 'name') {
    row.edit_name = false;
  }
  emit('pushDataValue', props.tableData)
}
</script>
