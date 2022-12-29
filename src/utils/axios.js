import axios from 'axios'

const baseURL = ''

const loader = {
  start: () => window.$loadingBar && window.$loadingBar.start(),
  error: e => {
    window.$loadingBar && window.$loadingBar.error()
    window.$message && window.$message.error(e || '请求失败')
  },
  done: () => window.$loadingBar && window.$loadingBar.finish(),
}

const instance = axios.create({
  baseURL,
  timeout: 10000,
})

instance.interceptors.request.use(
  config => {
    loader.start()
    return config
  },
  error => {
    console.log(error?.message)
    loader.error()
    return Promise.reject()
  }
)

instance.interceptors.response.use(
  response => {
    loader.done()
    return response.data
  },
  error => {
    loader.error(error?.message)
    console.log(error)
    return Promise.reject()
  }
)

export default instance

export { loader }
