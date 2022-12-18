import axios from 'axios'
import NProgress from 'nprogress'

// const baseURL = 'https://music.qier222.com/api'
const baseURL = 'https://api-music.imsyy.top'

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载 icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
})

const instance = axios.create({
  baseURL,
  timeout: 10000,
})

instance.interceptors.request.use(
  config => {
    NProgress.start()
    return config
  },
  error => {
    NProgress.done()
    console.log(error)
    return Promise.reject()
  }
)

instance.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error => {
    console.log(error)
    NProgress.done()
    return Promise.reject()
  }
)

export default instance
