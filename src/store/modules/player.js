// (https://github.com/goldfire/howler.js)
import { Howl } from 'howler'
import { PLAYER, ENABLED_PLAYER, PAUSE_PLAYER, NEXT_TRACK, LAST_TRACK } from './type/player-mutations-type'

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
     * 正在播放的
     */
    active: {},

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
      if (value === false) {
        /**
         * 暂停操作
         */
      }
      if (state.howler) {
        console.log('已实例化')
      } else {
        state.howler = new Howl({
          src: [...value],
          html5: true,
          preload: true,
        })
        state.howler.play()
      }
    },
  },
  actions: {
    /**
     * 1. 首次播放实例化 播放器
     * 2. 暂停 继续
     * 3. 切歌
     * 4. 关闭播放器
     */
    [PLAYER]({ commit }, data) {
      commit(PAUSE_PLAYER, data)
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
