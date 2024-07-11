/*静态字典*/
// 导入各个模块用到的静态字典
import DictOne from "@config/constant/dictOne.js";
import DictTwo from "@config/constant/dictTwo";
import { createApp } from 'vue';
import App from '../../App.vue';
const app = createApp(App);

// 将各个模块的字典拼接在一起
const lookupDicts = [{
  ...DictOne,
  ...DictTwo
}]

// 定义lookup对象，里面定义各种方法
const lookup = {

  // // 找到对应的Value
  // find: (objName) => {
  //   let target = Object.keys(lookupDicts);
  //   if (!target.includes(objName)) {
  //     // 因为该项目已经引入ElementPlus,这里可以直接使用
  //     ElMessage({
  //       message: 'find, this is empty.',
  //       type: 'warning',
  //     })
  //     return [];
  //   }
  //   return lookupDicts[objName];
  // },
  // // 根据obj,value值找key
  // findKey: (objName, value) => {
  //   let target = lookup.find(objName);
  //   console.log('target--2', target);
  //   // 如果对象中 有值
  //   if (Object.prototype.toString.call(target) === '[object Object]') {
  //     for (let key in target) {
  //       if (target[key] === value) {
  //         return key
  //       }
  //     }
  //     // 如果没有提示不存在
  //     // 因为该项目已经引入ElementPlus,这里可以直接使用
  //     ElMessage({
  //       message: 'findValue, this Obj is empty.',
  //       type: 'warning',
  //     })
  //     return '';
  //   } else if (Object.prototype.toString.call(target) === '[object Array]') {
  //     for (let item of target) {
  //       if (item.label === value) {
  //         return item.value
  //       }
  //     }
  //     // 没找到就报错，并且返回空
  //     // 因为该项目已经引入ElementPlus,这里可以直接使用
  //     ElMessage({
  //       message: 'findValue, this Arr is empty.',
  //       type: 'warning',
  //     })
  //     return '';
  //   }
  // },
  // // 根据obj,key值找value
  // findValue: (objName, value) => {
  //   let target = lookup.find(objName);
  //   if (Object.prototype.toString.call(target) === '[object Object]') {
  //     let res = Object.keys(target);
  //     // 没找到就报错，并且返回空
  //     if (!res.includes(value)) {
  //       ElMessage({
  //         message: 'findKey, this Obj is empty.',
  //         type: 'warning',
  //       })
  //       return '';
  //     }
  //     return target[value];
  //   } else if (Object.prototype.toString.call(target) === '[object Array]') {
  //     for (let item of target) {
  //       if (item.value === value) {
  //         return item.label
  //       }
  //     }
  //     // 没找到就报错，并且返回空
  //     ElMessage({
  //       message: 'findKey, this Arr is empty.',
  //       type: 'warning',
  //     })
  //     return '';
  //   }
  // }
}
export default lookupDicts
