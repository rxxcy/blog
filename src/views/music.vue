<template>
  <main>
    <div class="music">
      <div class="jumbotron">
        <div class="cover">
          <h2 class="title">听不听</h2>
        </div>
        <div class="info">
          <h2 class="title">我的歌单</h2>
          <p class="source">来自某易云音乐</p>
          <p class="date">最后更新于 2022年05月30日 · 100 首歌</p>
          <p class="description">我随便点的</p>

          <div class="contro">
            <button class="btn">播放</button>
            <button class="btn">喜欢</button>
          </div>
        </div>
      </div>
      <div class="track-list">
        <div v-for="item in 20" class="track">
          <!-- <div> -->
          <img class="cover" src="http://p3.music.126.net/QEvqm9LB8TRf5hbZKeMQ-Q==/109951167486838988.jpg?param=224y224" />
          <!-- </div> -->
          <div class="info">
            <div class="container">
              <h2 class="title">烟火里的尘埃</h2>
              <p class="artist">华晨宇</p>
            </div>
          </div>
          <div class="album">烟火里的尘埃</div>
          <!-- <div class="actions"></div> -->
          <div class="time">4:03</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  background: linear-gradient(#fdefef, #fff) repeat-x top left;
  background-size: 100% 300px;
  min-height: 600px;
  .music {
    width: 70%;
    margin: 0 auto;
    // padding: 100px 10vw 0 10vw;
    .jumbotron {
      display: flex;
      padding-top: 70px;
      margin-bottom: 70px;
      .cover {
        width: 290px;
        height: 290px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(233, 128, 178);
        border-radius: 0.7em;
        .title {
          color: #fff;
          font-size: 3.5em;
          font-weight: 200;
        }
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 56px;
        .title {
          font-size: 2.2em;
        }
        .source {
          font-size: 1.3em;
          color: #222;
          margin-top: 24px;
          font-weight: 200;
          font-family: $wryh;
        }
        .date {
          font-family: $wryh;
          font-size: 14px;
          opacity: 0.68;
          color: #000;
          margin-top: 2px;
        }
        .description {
          font-family: $wryh;
          font-size: 14px;
          opacity: 0.68;
          color: #000;
          margin-top: 24px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          cursor: pointer;
        }
        .contro {
          margin-top: 32px;
          .btn {
            margin-right: 16px;
            color: #335eea;
            background-color: #eaeffd;
            border: none;
            transition: 0.2s;
            user-select: none;
            border-radius: 8px;
            padding: 8px 16px;
            width: auto;
            cursor: pointer;
          }
        }
      }
    }

    .track-list {
      margin-bottom: 100px;
      .track {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 12px;
        user-select: none;
        &:hover {
          background-color: #f5f5f7;
        }
        .cover {
          border-radius: 8px;
          height: 46px;
          width: 46px;
          margin-right: 20px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          cursor: pointer;
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 18px;
            font-weight: 200;
            cursor: default;
            padding-right: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            word-break: break-all;
            cursor: pointer;
          }
          .artist {
            margin-top: 2px;
            font-size: 13px;
            opacity: 0.68;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
        .album {
          flex: 1;
          padding: 8px;
          border-radius: 12px;
          user-select: none;
        }
      }
    }
  }
}
</style>
