import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCollapseStore = defineStore('isCollapse', () => {
  const isCollapse = ref(true)
  const openCollapse = () => {
    isCollapse.value = !isCollapse.value
  }
  return { isCollapse, openCollapse }
})