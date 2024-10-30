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
        component: () => import("@view/num/tabNums.vue"), // 建议进行路由懒加载，优化访问性能
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
      {
        path: "dblclick",
        name: "dblclick",
        component: () => import("@view/num/dblclick.vue"),
        meta: { title: '左键双击表格可编辑', icon: 'dashboard', affix: true }
      },
      {
        path: "rightMenu",
        name: "rightMenu",
        component: () => import("@view/num/rightMenu.vue"),
        meta: { title: '右键菜单功能', icon: 'dashboard', affix: true }
      },
      {
        path: "catalogue",
        name: "catalogue",
        component: () => import("@view/num/catalogue.vue"),
        meta: { title: 'el-tree目录效果', icon: 'dashboard', affix: true }
      },
      {
        path: "tinymce",
        name: "tinymce",
        component: () => import("@view/num/tinymce.vue"),
        meta: { title: '富文本编辑器', icon: 'dashboard', affix: true }
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
