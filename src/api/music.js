import axios from '../utils/musicApi'

/**
 * 搜索歌曲
 */
const TRACKS = 1
const REAL_IP = '39.128.4.38'

export const search = (keywords, offset = 0) => {
  return axios({
    url: '/search',
    method: 'get',
    params: {
      keywords,
      type: TRACKS,
      offset,
      realIP: REAL_IP,
    },
  })
}

export const details = ids => {
  return axios({
    url: '/song/detail',
    method: 'get',
    params: {
      ids,
      realIP: REAL_IP,
    },
  })
}

/**
 * 获取歌词
 * 说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
 * @param {number} id - 音乐 id
 */
export function getLyric(id) {
  const fetchLatest = () => {
    return axios({
      url: '/lyric',
      method: 'get',
      params: {
        id,
      },
    }).then(result => {
      cacheLyric(id, result)
      return result
    })
  }

  fetchLatest()

  return getLyricFromCache(id).then(result => {
    return result ?? fetchLatest()
  })
}
