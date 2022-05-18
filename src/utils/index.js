export const loaderImage = src => {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = () => {
      resolve()
      dispose()
    }

    image.onerror = e => {
      console.log('加载失败了哦')
      reject(e)
      dispose()
    }

    image.src = src

    const dispose = () => {
      image.onload = image.onerror = null
    }
  })
}
