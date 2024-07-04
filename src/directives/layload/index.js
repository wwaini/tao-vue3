import loadingImg from '../../asset/layload/loadingImg.gif'
import errorImg from '../../asset/layload/errorImg.png'
export default {
  mounted(el, binding) {
    el.src = loadingImg
    // IntersectionObserver 接口提供了一种异步观察目标元素
    // 与其祖先元素或顶级文档视口（viewport）交叉状态的方法。
    el.Intersection = new IntersectionObserver((entries) => {
      // 如果交叉，则背景图片替换成绑定图片
      if (entries[0].isIntersecting) {
        el.src = binding.value.src
        // 加载成功
        el.onload = (res) => {
          console.log('加载成功', res)
        };
        // 加载失败了需要做一个错误图片的占位
        el.onerror = (err) => {
          console.log('加载失败', err);
          el.src = errorImg
        }
      }
    })
    el.Intersection.observe(el)
  },
  unmounted(el, binding) {
    el.Intersection.unobserve(el)
  }
}