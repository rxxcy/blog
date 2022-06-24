<template>
  <div class="track">
    <!-- <div> -->
    <img class="cover" :src="cover" />
    <!-- </div> -->
    <div class="info">
      <div class="container">
        <h2 class="title" @click="handlerPlayerMusic(track)">{{ track.name }}</h2>
        <p class="artist">{{ track.author }}</p>
      </div>
      <div class="blank"></div>
    </div>
    <div class="album">{{ album.name || '' }}</div>
    <!-- <div class="actions"></div> -->
    <div class="time">{{ time }}</div>
  </div>
</template>

<script setup>
import { computed, onMounted, /*getCurrentInstance,*/ reactive } from 'vue'

const props = defineProps({
  track: {
    type: Object,
    default: () => {},
  },
})

// const { proxy } = getCurrentInstance()
const track = reactive({})

onMounted(() => {
  // console.log('props.track', props.track)
  track.id = props.track.id
  track.name = props.track.name
  track.dt = props.track.dt
  track.album = props.track.album
  track.al = props.track.al
  track.track = props.track.track
  console.log('props.track.al', props.track.al)
})

const time = computed(() => {
  const minutes = ~~(track.dt / 1000 / 60)
  let seconds = ~~((track.dt % (1000 * 60)) / 1000)
  seconds = seconds >= 10 ? seconds : `0${seconds}`
  return `${minutes}:${seconds}`
})

const album = computed(() => track.album || track.al || track?.simpleSong?.al || { name: '' })
const cover = computed(() => {
  let image =
    track?.al?.picUrl ?? track?.album?.picUrl ?? 'https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg'
  return image + '?param=224y224'
})

const handlerPlayerMusic = row => {}
</script>

<style lang="scss" scoped>
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
    .container {
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
      .blank {
        flex: 1;
      }
    }
  }
  .album {
    flex: 1;
    padding: 8px;
    border-radius: 12px;
    user-select: none;
  }
}
</style>
