import axios from "../utils/axios"
import store from "../store"

/**
 * 首页公共信息
 */

export const getHomeData = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log(123)
      store.dispatch({
        type: "changeLoadin",
        value: false,
      })
      reslove({ name: "mike" })
    }, 5000)
  })
  // return axios({
  //   url: "",
  //   method: "get",
  // })
}
