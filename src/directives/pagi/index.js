
// pagi/index.js
export default {
  // 绑定即触发，el为DOM元素，binding能读取元素上绑定的各内容集合的对象
  mounted(el, binding) {
    el.childNodes[5].childNodes[0].innerHTML = binding.value
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.childNodes[5].childNodes[0].innerHTML = binding.value
    }
  }
}
