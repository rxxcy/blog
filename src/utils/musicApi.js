import axios from 'axios'

// const baseURL = 'https://music.qier222.com/api'
const baseURL = 'https://api.music.imsyy.top'

const instance = axios.create({
  baseURL,
  timeout: 10000,
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

export default instance
