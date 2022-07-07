<template>
  <main>
    <div class="music">
      <div class="jumbotron">
        <div class="cover">
          <h2 class="title">写几个字</h2>
        </div>
        <div class="info">
          <h2 class="title">我的歌单</h2>
          <p class="source">来自某易云音乐</p>
          <p class="date">最后更新于 {{ now }} · {{ tracks.length || 0 }} 首歌</p>
          <p class="description">我随便点的</p>

          <div class="contro">
            <button class="btn">播放</button>
            <button class="btn">喜欢</button>
          </div>
        </div>
      </div>
      <div class="search">
        <input type="text" v-model="keywords" class="keywords" :placeholder="placeholder" @keyup.enter="handlerSearchTracks" />
      </div>
      <div class="track-list">
        <TrackItem v-for="(track, index) in tracks" :track="track" :key="index" @playTrack="handlerPlayerTrack" />

        <Below :message="message" />
      </div>
    </div>
  </main>
</template>

<script setup>
import TrackItem from '../components/TrackItem.vue'
// import { useStore } from 'vuex'
import { search, details } from '../api/music'
import { onMounted, ref } from 'vue'
import Below from '../components/Below.vue'
import { timeOfNianYueRi } from '../utils'
// import { PLAYER } from '../store/modules/type/player-mutations-type'

// const store = useStore()
const tracks = ref([])
const offset = ref(0)
const keywords = ref('陈冠希')
const now = timeOfNianYueRi()
const message = ref('加载中')
const placeholder = ref('来点什么')

onMounted(() => {
  handlerGetTracks()
})

const handlerSearchTracks = () => {
  if (!keywords.value) {
    placeholder.value = '关键字不能为空啊 😒'
    return false
  }
  handlerSearchTracks()
}

const handlerGetTracks = async () => {
  const { code, result } = await search(keywords.value, offset.value)
  if (code !== 200) {
    return false
  }
  const songs = result.songs
  if (!songs || songs.length <= 0) {
    return false
  }
  const ids = []
  for (const { id } of songs) {
    ids.push(id)
  }
  // console.log('ids', ids)
  const tempTracks = await details(ids.join(','))
  if (tempTracks.code !== 200) {
    return false
  }
  tracks.value = tempTracks.songs
}

const handlerPlayerTrack = row => {
  const url = 'https://lab.rxxcy.com/mzdhl.m4a'
  // const url = `https://music.163.com/song/media/outer/url?id=${row.id}`
  // console.log('row', row)
  // store.dispatch(PLAYER, [url])
  // store.dispatch(PLAYER, [`https://music.163.com/song/media/outer/url?id=${row.id}`])
}
</script>

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
      margin-bottom: 35px;
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

    .search {
      margin-bottom: 35px;
      text-align: center;
      // visibility: hidden;
      opacity: 0;
      transition: all 0.3s;
      &:hover {
        opacity: 1;
      }
      .keywords {
        width: 270px;
        background-color: rgb(227, 227, 227);
        border-radius: 1em;
        padding: 0.5em 0.8em;
        border: none;
        text-align: center;
      }
    }

    .track-list {
      margin-bottom: 100px;
    }
  }
}
</style>
