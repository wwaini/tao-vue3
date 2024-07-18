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
        path: "requestAnimationFrame",
        name: "requestAnimationFrame",
        component: () => import("@view/num/one.vue"),
        meta: { title: '定时器和requestAnimationFrame', icon: 'dashboard', affix: true }
      },
      {
        path: "directives",
        name: "directives",
        component: () => import("@view/num/two.vue"),
        meta: { title: '自定义指令', icon: 'dashboard', affix: true }
      },
      {
        path: "tab-nums",
        name: "tab-nums",
        component: () => import("@view/num/three.vue"), // 建议进行路由懒加载，优化访问性能
        meta: { title: '按Tab键切换', icon: 'dashboard', affix: true }
      },
      {
        path: "Echart",
        name: "Echart",
        component: () => import("@view/num/four.vue"),
        meta: { title: 'Echart', icon: 'dashboard', affix: true }
      },
      {
        path: "xgplayer",
        name: "xgplayer",
        component: () => import("@view/num/five.vue"),
        meta: { title: 'xgplayer视频用法', icon: 'dashboard', affix: true }
      },
      {
        path: "my-select",
        name: "my-select",
        component: () => import("@view/num/six.vue"),
        meta: { title: '下拉框触底加载自定义指令', icon: 'dashboard', affix: true }
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
