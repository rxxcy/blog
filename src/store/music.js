import { defineStore } from 'pinia'

export const MusicStore = defineStore({
  id: 'music',
  state: () => {
    return {
      enabled: true,

      volume: 0,
      beforeMMuteVolume: 0,
    }
  },
  actions: {
    /**
     * 下一首
     */
    next() {},

    /**
     * 停止
     */
    stop() {},

    /**
     * 音量
     */
    volume(v) {},
  },
})
