// src/components/myLoading/index.js
// 引入vue
import { createVNode, render } from "vue";
// 引入loading组件
import MyLoading from './index.vue';

let mountNode = null;
const showLoading = (options) => {
  const { msg, duration = 2000 } = options;
  //确保只存在一个弹框，如果前一个弹窗还在，就移除
  if (mountNode) {
    document.body.removeChild(mountNode);
    mountNode = null;
  }
  //将options参数传入，并将MyLoading组件转换成虚拟DOM，并赋值给app
  const app = createVNode(MyLoading, {
    msg,
    duration,
    show_toast: true,
  });
  //创建定时器，duration时间后将mountNode移除
  let timer = setTimeout(() => {
    if (mountNode) {
      document.body.removeChild(mountNode);
      mountNode = null;
    }
    clearTimeout(timer);
  }, duration);
  //创建一个空的div
  mountNode = document.createElement('div');
  //render函数的作用就是将Notice组件的虚拟DOM转换成真实DOM并插入到mountNode元素里
  render(app, mountNode);
  //然后把转换成真实DOM的MyLoading组件插入到body里
  document.body.appendChild(mountNode);
}

export default showLoading;