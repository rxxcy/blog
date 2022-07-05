<template>
  <img class="image" :style="is_loaded ? '' : style" ref="image" :src="real" @click="handlerPreview" />
  <div v-if="preview_dialog" class="preview" @click="closePreview">
    <!-- <div class="last" @click="handlerLastOne">上</div> -->
    <img ref="preview_image" :style="preview_style" :src="src" />
    <!-- <div class="next" @click="handlerNextOne">下</div> -->
  </div>
</template>

<script setup>
// todo 预览切换 下个版本再写了
import { onMounted, reactive, ref } from 'vue'
import { loaderImage } from '../utils'
const props = defineProps({
  src: {
    type: String,
    default: () => 'https://img.rxxcy.com/i/images/2022/05/628361b9cb9ee.gif',
  },
  default: {
    type: String,
    default: () => 'https://cdn.qiniu.rxxcy.com/blog/assets/images/top/lolisister1.gif',
  },
  error: {
    type: String,
    default: () => 'https://www.dute.org/placeholder/154x57?fontsize=32&text=加载失败&bgcolor=e5e5e5',
  },
  preview: {
    type: Boolean,
    default: () => true,
  },
})

const preview_style = reactive({})
const preview_image = ref(null)

const image = ref(null)
const preview_dialog = ref(false)
const is_loaded = ref(false)
const real = ref(props.default)
const style = reactive({})

const handlerLastOne = () => {
  // e = e || window.event
  // if (e.stopPropagation) {
  //   e.stopPropagation()
  // } else {
  //   e.cancelBubble = true
  // }
  // if (e.preventDefault) {
  //   e.preventDefault()
  // } else {
  //   e.returnValue = false
  // }
}
const handlerNextOne = () => {
  // e = e || window.event
  // if (e.stopPropagation) {
  //   e.stopPropagation()
  // } else {
  //   e.cancelBubble = true
  // }
  // if (e.preventDefault) {
  //   e.preventDefault()
  // } else {
  //   e.returnValue = false
  // }
}

const handlerPreview = () => {
  if (!props.preview) return false
  preview_dialog.value = true
  window.addEventListener('mousewheel', handlerZoom, { passive: false })
}

const closePreview = () => {
  preview_dialog.value = false
  window.removeEventListener('mousewheel', handlerZoom)
}

onMounted(() => {
  /**
   * 自动获取父元素高度
   */
  const parent = image.value.parentNode
  style.width = '100px'
  style.height = '130px'
  style.display = 'block'
  style.margin = `${parent.offsetHeight / 2 - 65}px auto`

  /**
   * 自动获取预览图样式
   */
  const width = window.document.documentElement.clientWidth || window.document.body.clientWidth
  const height = window.document.documentElement.clientHeight || window.document.body.clientHeight
  if (width > height) {
    /**
     * pc
     */
    preview_style.height = '100vh'
  } else {
    /**
     * mobile
     */
    preview_style.width = '100vw'
  }
  /**
   * 图片懒加载
   */
  lazyLoader()
})

const lazyLoader = () => {
  const dom = image.value
  const ob = new IntersectionObserver(item => {
    const ratio = item[0].intersectionRatio
    if (ratio > 0) {
      loaderImage(props.src)
        .then(i => {
          real.value = props.src
          is_loaded.value = true
        })
        .catch(e => (real.value = props.error))
      ob.unobserve(dom)
    }
  })
  ob.observe(dom)
}

const handlerZoom = e => {
  const { deltaY, wheelDelta } = e
  e = e || window.event
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    e.cancelBubble = true
  }
  if (e.preventDefault) {
    e.preventDefault()
  } else {
    e.returnValue = false
  }
  const dom = preview_image.value
  let zoom = parseInt(dom.style.zoom, 10) || 100
  zoom += wheelDelta / 12
  if (zoom > 0) {
    dom.style.zoom = zoom + '%'
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  border-radius: 3px;
  object-fit: cover;
}

.lazy {
  width: 100px;
  border-radius: 3px;
  display: block;
  margin: 0 auto;
  margin-top: 100px;
}
.preview {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  &::before {
    content: '';
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #e5e5e5;
    // background-color: #000;
    backdrop-filter: blur(5px);
    z-index: -1;
  }
  img {
    display: block;
    text-align: center;
    // height: 100vh;
  }
  .next,
  .last {
    width: 100px;
    height: 100vh;
    position: fixed;
    top: 0;
    color: transparent;
    line-height: 100vh;
    text-align: center;
    transition: all 1s;
    cursor: pointer;
  }
  .last {
    left: 0;
    &:hover {
      color: #fff;
      background: linear-gradient(to right, $blue, transparent);
    }
  }
  .next {
    right: 0;
    &:hover {
      color: #fff;
      background: linear-gradient(to right, transparent, $green);
    }
  }
}
</style>
