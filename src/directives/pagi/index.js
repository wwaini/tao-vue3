
// directives/pagi/index.js
export default {
  // 绑定即触发，el为DOM元素，binding能读取元素上绑定的各内容集合的对象
  mounted(el, binding) {
    // 找到需要修改内容的元素
    let dom = el.childNodes[el.childNodes.length - 1].childNodes[0]
    dom.innerHTML = binding.value
    // 为了更加清楚看出修改部分
    dom.style.color = 'red'
  },
  updated(el, binding) {
    let dom = el.childNodes[el.childNodes.length - 1].childNodes[0]
    // 如果绑定的内容与原始内容一致就不需要修改，这里要考虑边界值
    if (binding.value !== binding.oldValue) {
      dom.innerHTML = binding.value
    }
  }
}
