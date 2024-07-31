<template>
  <div>
    index
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

onMounted(() => {
  axios.get('http://localhost:9999/getPersonMsg').then(res => {
    console.log(res);
  })
})
</script>

<style scoped lang="scss"></style>