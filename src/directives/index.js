// directives/index.js
import taohtml from "./taohtml"
import layload from "./layload"
import pagi from "./pagi"
// 自定义指令对象，用于遍历注册
const directives = {
  taohtml, layload, pagi
}
// 批量注册指令并暴露到main.js中去便于注册
export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}