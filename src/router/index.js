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
      },
      {
        path: "one",
        name: "one",
        component: () => import("@view/num/one.vue"),
        meta: { title: '一页', icon: 'dashboard', affix: true }
      },
      {
        path: "two",
        name: "two",
        component: () => import("@view/num/two.vue"),
        meta: { title: '二页', icon: 'dashboard', affix: true }
      },
      {
        path: "three",
        name: "three",
        component: () => import("@view/num/three.vue"), // 建议进行路由懒加载，优化访问性能
        meta: { title: '三页', icon: 'dashboard', affix: true }
      },
      {
        path: "four",
        name: "four",
        component: () => import("@view/num/four.vue"),
        meta: { title: '四页', icon: 'dashboard', affix: true }
      },
      {
        path: "five",
        name: "five",
        component: () => import("@view/num/five.vue"),
        meta: { title: '五页', icon: 'dashboard', affix: true }
      },
    ]
  },
  {
    path: '/401',
    component: () => import('@view/error/401.vue'),
    hidden: true
  }
];

const router = createRouter({
  history: createWebHistory(), // 使用history模式
  //  history: createWebHashHistory(),  // 使用hash模式
  routes,
});

export default router;
