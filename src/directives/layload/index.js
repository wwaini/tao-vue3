export default {
  mounted(el, binding) {
    // IntersectionObserver 接口提供了一种异步观察目标元素
    // 与其祖先元素或顶级文档视口（viewport）交叉状态的方法。
    el.Intersection = new IntersectionObserver((entries) => {
      // 如果交叉，则背景图片替换成绑定图片
      if (entries[0].isIntersecting) {
        el.src = binding.value
      }
    })
    el.Intersection.observe(el)
  },
  unmounted(el, binding) {
    el.Intersection.unobserve(el)
  }
}