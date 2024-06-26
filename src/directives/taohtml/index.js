
// taohtml/index.js
export default {
  // 绑定即触发，el为DOM元素，binding能读取元素上绑定的各内容集合的对象
  mounted(el, binding) {
    console.log(el)
    // <div>周小姐∝</div>
    console.log(binding)
    // {
    //     "dir": {},
    //     "instance": {},
    //     "value": "周小姐∝",
    //     "arg": "a", 
    //     "modifiers": {}
    // }
    el.innerHTML = binding.value
  },
  // 绑定的value更新时触发
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.innerHTML = binding.value
    }
  }
}
