<template>
  <div>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
  </div>
</template>
<script setup>
import { ref, defineComponent } from 'vue'
const input = ref('')
defineComponent({
  name: 'one',
})

</script>

<style scoped lang="scss"></style>