import axios from "axios"

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

instance.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.status === 200) {
      return data
    } else {
      return Promise.reject(data.msg)
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

export default instance
