import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"), // 建议进行路由懒加载，优化访问性能
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/pagigation",
    name: "pagigation",
    component: () => import("../views/pagigation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用history模式
  //  history: createWebHashHistory(),  // 使用hash模式
  routes,
});

export default router;
