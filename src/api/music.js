import axios from '..//utils/musicApi'

/**
 * 搜索歌曲
 */
const TRACKS = 1
const REAL_IP = '211.161.244.70'

export const search = (keywords, offset = 0) => {
  return axios({
    url: '/api/search',
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
    url: '/api/song/detail',
    method: 'get',
    params: {
      ids,
      realIP: REAL_IP,
    },
  })
}
