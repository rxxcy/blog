import axios from 'axios'

const baseURL = ''

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
