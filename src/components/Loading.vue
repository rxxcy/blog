<template>
  <div v-if="loader.status" class="loadin">
    <div class="img">
      <img :src="loader.img" alt="" />
    </div>
    <!-- <div class="zhe"></div> -->
    <p>加载中... {{ gwei ? gwei : '' }}</p>
  </div>
</template>

<script setup>
import { nextTick, ref, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'
// import { useStore } from 'vuex'
import { SystemStore } from '../store/system'
const store = SystemStore()
const router = useRoute()
const loader = reactive(store.loader)
const gwei = ref(0)

let setTimeOut = false

watch(
  () => store.loader.status,
  n => {
    if (n === true) {
      setTimeOut = setInterval(() => {
        gwei.value += 1
        nextTick()
      }, 1000)
    } else {
      gwei.value = 0
      clearInterval(setTimeOut)
      setTimeOut = null
    }
  }
)
</script>

<style lang="scss" scoped>
.loadin {
  user-select: none;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $loader-z-index;
  .img {
    z-index: $loder-img-z-index;
    img {
      border-radius: 5em;
    }
  }
  &::before {
    content: '';
    // background-color: #f7fcff;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: $loder-zhe-z-index;
    background-color: rgba(247, 249, 250, 0.2);
    backdrop-filter: blur(7px);
  }
  p {
    z-index: 99999;
    position: fixed;
    bottom: 1em;
    right: 1em;
    color: #abb8c3;
  }
}
</style>
