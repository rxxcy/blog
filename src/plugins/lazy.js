import defaultImg from '../assets/images/default.gif'

export default {
  install(app) {
    app.directive('lazyload', {
      mounted(el, bindings) {
        console.log(bindings)
        // el - dom元素，bindings - 指令的值
        const observer = new IntersectionObserver(
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              observer.unobserve(el)
              // 表示绑定的 dom 进入可视区域
              el.src = bindings.value
              // 图片加载出错时，显示默认图片
              el.onerror = () => {
                el.src = defaultImg
              }
            }
          },
          {
            threshold: 0,
          }
        )
        // 监视 dom
        observer.observe(el)
      },
    })
  },
}
