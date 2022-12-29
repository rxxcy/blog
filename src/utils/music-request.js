import axios from 'axios'
import { loader } from './axios'

// const baseURL = 'https://music.qier222.com/api'
const baseURL = 'https://api-music.imsyy.top'

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
    loader.error(error?.message)
    console.log(error)
    return Promise.reject()
  }
)

instance.interceptors.response.use(
  response => {
    loader.done()
    return response.data
  },
  error => {
    console.log(error)
    loader.error(error?.message)
    return Promise.reject()
  }
)

export default instance
