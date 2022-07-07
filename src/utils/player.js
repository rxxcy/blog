import { Howl } from 'howler'

class Player {
  constructor() {
    this.howl = null

    /**
     * 播放状态
     * normal 正常
     * suspend 暂停
     * stop 停止
     */
    this.status = 'stop'
  }

  /**
   * 继续 & 暂停
   */
  play() {}

  /**
   * 下一首
   */
  next() {}

  /**
   * 停止
   */
  stop() {}

  /**
   * 音量
   */
  volume(v) {}

  /**
   * 格式化歌词
   */
  formatLyric() {}
}

export const player = new Player()
