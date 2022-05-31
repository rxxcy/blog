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

export const timeOfNianYueRi = () => {
  const t = new Date()
  const Y = t.getFullYear()
  let m = t.getMonth() + 1
  m = m > 10 ? m : `0${m}`
  let d = t.getDate()
  d = d > 10 ? d : `0${d}`
  return `${Y}年${m}月${d}日`
}
