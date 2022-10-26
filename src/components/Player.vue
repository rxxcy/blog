<template>
  <section v-if="!first">
    <transition name="slide-up">
      <div v-show="enabled" class="player">
        <div class="progress">
          <!-- <div class="container"> -->
          <slider
            :tooltip="true"
            tooltipText="%v"
            :formatTooltip="formatTooltip"
            v-model="du"
            color="#ff6900"
            :height="4"
            track-color="#e9e9e9"
          />
          <!-- </div> -->
          <!-- <div class="formerly"></div> -->
          <!-- <div class="ball" @touchstart="touchstart" @touchmove="touchstart"></div> -->
        </div>
        <div class="panel">
          <div class="playing">
            <div class="container">
              <img class="cover" src="https://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg?param=224y224" />
              <div class="track-info">
                <div class="name">烟火里的尘埃 {{ enabled }}</div>
                <div class="artist">
                  <span>华晨宇</span>
                  <time class="time">1:07/5:09</time>
                </div>
              </div>
            </div>
          </div>
          <div class="controls">
            <button class="btn">
              <img src="../assets/images/last.png" />
            </button>
            <button class="btn pause">
              <img class="pause-img" src="../assets/images/play.png" />
              <!-- <img class="pause-img" src="../assets/images/pause.png" /> -->
            </button>
            <button class="btn">
              <img src="../assets/images/next.png" />
            </button>
          </div>
          <div class="volumes">
            <button class="btn loop" @click="handlerChnageLoop">
              <img class="loop-img" v-show="loop" src="../assets/images/loop.png" />
              <img class="loop-img" v-show="!loop" src="../assets/images/random.png" />
            </button>
            <button class="btn volume" @click="handlerMute">
              <img class="volume-img" v-show="mute" src="../assets/images/volume.png" />
              <img class="volume-img" v-show="!mute" src="../assets/images/mute.png" />
            </button>
            <div class="volumes-bar">
              <slider
                :tooltip="true"
                tooltipText="%v"
                :formatTooltip="formatTooltip"
                v-model="volume"
                color="#ff6900"
                :height="4"
                track-color="#e9e9e9"
              />
              <!-- <div class="tiao"></div>
              <div class="ball"></div> -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
/**
 * 首次 v-if
 *  二次 v-show
 */
import slider from 'vue3-slider'
import { computed, onMounted, ref, watch } from 'vue'
// import { useStore } from 'vuex'
import { MusicStore } from '../store/music'
const store = MusicStore()
const enabled = computed(() => store.enabled)

// console.log(enabled)

/**
 * 播放器
 */
// const player = computed(() => store.howl)

const first = ref(false)
const loop = ref(true)
const mute = ref(true)

const du = ref(0)
const volume = ref(50)

const last_volume = ref(0)

watch(
  () => enabled.value,
  () => {
    if (enabled.value && first.value) {
      first.value = false
    }
  }
)

onMounted(() => {
  // setTimeout(() => {
  // store.dispatch('showPlayer')
  // }, 1000)
})

const touchstart = e => console.log(e)

const formatTooltip = e => {
  return `${e}`
}

const handlerChnageLoop = () => (loop.value = !loop.value)

const handlerMute = () => {
  if (!mute.value) {
    // last_volume =
  }
  mute.value = !mute.value
}
</script>

<style lang="scss" scoped>
.player {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 64px;
  backdrop-filter: saturate(180%) blur(30px);
  background-color: hsla(0, 0%, 100%, 0.86);
  // background-color: $orange;
  z-index: $loder-player-z-index;
  user-select: none;

  .progress {
    margin-top: -6px;
    margin-bottom: -6px;
    width: 100%;
    // height: 2px;
    // background-color: #e9e9e9;
    position: relative;

    &:hover > .ball {
      background-color: $orange;
    }

    // .container {
    //   width: 100%;
    //   border-radius: 10px;
    // }
    // .ball {
    //   background-color: transparent;
    //   position: absolute;
    //   width: 12px;
    //   height: 12px;
    //   transform: translate(-50%, -50%);
    //   top: 50%;
    //   left: 50%;
    //   transition: left 0s ease 0s;
    //   border-radius: 1em;
    //   cursor: pointer;
    //   transition: background 0.3s;
    // }
  }

  .panel {
    padding: 0 10vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;

    .playing {
      display: flex;
      align-items: center;

      // justify-content: center;
      .container {
        display: flex;

        .cover {
          height: 46px;
          border-radius: 5px;
          box-shadow: 0 6px 8px -2px rgb(0 0 0 / 16%);
          cursor: pointer;
          user-select: none;
        }

        .track-info {
          height: 46px;
          margin-left: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .name {
            font-weight: 600;
            font-size: 16px;
            opacity: 0.88;
            color: #000;
            margin-bottom: 4px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            word-break: break-all;
          }

          .artist {
            font-size: 12px;
            opacity: 0.58;
            color: #000;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            word-break: break-all;

            // span.ar {
            //   cursor: pointer;
            //   &:hover {
            //     text-decoration: underline;
            //   }
            // }
            .time {
              margin-left: 1em;
            }
          }
        }
      }
    }

    .controls {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;

      .btn {
        margin: 0 8px;
        // padding: 0;
        width: 40px;
        height: 32px;
        background-color: transparent;
        border-radius: 0.5em;
        border: none;
        outline: none;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f7;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .pause {
        width: 56px;
        height: 45px;
      }
    }

    .volumes {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn {
        margin: 0 8px;
        width: 32px;
        height: 25px;
        background-color: transparent;
        border-radius: 0.5em;
        border: none;
        outline: none;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f7;
        }

        .loop-img {
          width: 100%;
          height: 100%;
        }

        .volume-img,
        .loop-img {
          width: 100%;
          height: 100%;
        }
      }

      &-bar {
        width: 85px;
        height: 4px;
        background-color: hsl(0deg 0% 50% / 18%);
        border-radius: 10px;
        position: relative;

        :deep(.vue3-slider) {
          margin: 0;
        }

        // .tiao {
        //   position: absolute;
        //   width: 50%;
        //   height: 100%;
        //   background-color: $orange;
        //   border-radius: 10px;
        // }
        // .ball {
        //   position: absolute;
        //   width: 12px;
        //   height: 12px;
        //   transform: translate(-50%, -50%);
        //   top: 50%;
        //   left: 50%;
        //   transition: left 0s ease 0s;
        //   border-radius: 1em;
        //   cursor: pointer;
        //   transition: background 0.3s;
        // }
        &:hover > .ball {
          background-color: $orange;
        }
      }
    }
  }
}

@media (max-width: 1336px) {
  .controls {
    padding: 0 5vw;
  }
}
</style>
