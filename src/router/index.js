import { createRouter, createWebHistory } from "vue-router";
import Layout from '@layout/index.vue'
const routes = [
  {
    path: '/login',
    component: () => import('@view/login.vue'),
    hidden: true
  },
  {
    path: "",
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@view/index.vue'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: "/num",
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: "one",
        name: "one",
        component: () => import("@view/num/one.vue"),
      },
      {
        path: "two",
        name: "two",
        component: () => import("@view/num/two.vue"),
      },
      {
        path: "three",
        name: "three",
        component: () => import("@view/num/three.vue"), // 建议进行路由懒加载，优化访问性能
      },
      {
        path: "four",
        name: "four",
        component: () => import("@view/num/four.vue"),
      },
      {
        path: "five",
        name: "five",
        component: () => import("@view/num/five.vue"),
      },
    ]
  },
  {
    path: '/401',
    component: () => import('@view/error/401.vue'),
    hidden: true
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用history模式
  //  history: createWebHashHistory(),  // 使用hash模式
  routes,
});

export default router;
