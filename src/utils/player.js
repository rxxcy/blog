import { Howl, Howler } from 'howler'

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
    /**
     * TODO:
     * 播放列表
     */
    this.trackes = []
  }

  /**
   * 播放
   */
  play(source) {
    Howler.unload()
    this.howl = new Howl({
      src: [source],
      html5: true,
      preload: true,
      format: ['mp3', 'flac'],
      onend: () => console.log('播放器初始化成功'),
    })
    this.howl.on('loaderror', this.howlLoadError)

    this.howl.play()
  }

  /**
   * 继续 & 暂停
   */
  pause() {}

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

  /**
   * howl 加载失败
   * https://developer.mozilla.org/en-US/docs/Web/API/MediaError/code
   * code 3: MEDIA_ERR_DECODE
   */
  howlLoadError(_, code) {
    console.log(`音乐资源加载失败: ${code}`)
  }
}

export const player = new Player()
