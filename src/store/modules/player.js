// (https://github.com/goldfire/howler.js)
import { Howler } from 'howler'
import { ENABLED_PLAYER, PAUSE_PLAYER } from './type/player-mutations-type'

const player = {
  state: () => ({
    // 显示
    enabled: true,
    /**
     * 播放器
     */
    howler: null, // 播放器实例
    pause: false, // 是否正在播放
    progress: 0, // 当前播放进度
    volume: 0, // 音量 0-1
    volumeBeforeMuted: 0, // 静音前的音量
    muta: false, // 静音

    /**
     * 播放列表
     */
    list: [], // 列表
    current: 0, // 正在播放的index
  }),
  mutations: {
    [ENABLED_PLAYER](state, value) {
      if (state.enabled == value) return
      state.enabled = value
    },
    [PAUSE_PLAYER](state, value) {
      if (state.enabled == value) return
      state.pause = value
    },
  },
  actions: {
    pausePlayer({ commit }) {
      commit(PAUSE_PLAYER, true)
    },
    continuePlayer({ commit }) {
      commit(PAUSE_PLAYER, false)
    },
    enabledPlayer({ commit }) {
      commit(ENABLED_PLAYER, true)
    },
    hiddenPlayer({ commit }) {
      commit(ENABLED_PLAYER, false)
    },
  },
  getters: {
    show: state => state.show,
    list: state => state.list,
  },
}

export default player
