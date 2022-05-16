<template>
  <div v-if="loader.status" class="loadin">
    <div class="img">
      <img :src="loader.img" alt="" />
    </div>
    <div class="zhe"></div>
    <p>加载中... {{ gwei ? gwei : '' }}</p>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRoute()
const loader = reactive(store.state.loader)
const gwei = ref(0)

let setTimeOut = false

watch(
  () => store.state.loader.status,
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
  .img {
    z-index: 99999;
    img {
      border-radius: 5em;
    }
  }
  .zhe {
    background-color: #f7fcff;
    opacity: 0.9;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99998;
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
