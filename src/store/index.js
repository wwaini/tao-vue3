import { defineStore } from "pinia";
// 第一个参数 storeId 是仓库的key 必须独一无二
export const useStore = defineStore("storeId", {
  state: () => {
    return { count: 0, name: "张三" };
  },
  getters: {},
  actions: {},
});
