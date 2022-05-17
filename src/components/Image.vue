<template>
  <img class="image" :style="is_loaded ? style : ''" ref="image" :src="real" @click="handlerPreview" />
  <div v-if="preview" class="preview">
    <img :src="default" />
  </div>
</template>

<script setup>
// 懒加载
// todo预览
import { onMounted, reactive, ref } from 'vue'
import { loaderImage } from '../utils'
const props = defineProps({
  src: {
    type: String,
    default: () => 'https://img.rxxcy.com/i/images/2022/05/628361b9cb9ee.gif',
  },
  default: {
    type: String,
    default: () => 'https://img.rxxcy.com/i/images/2022/05/628361b9cb9ee.gif',
  },
  error: {
    type: String,
    default: () => 'https://img.rxxcy.com/i/images/2022/05/628361b9cb9ee.gif',
  },
})

const image = ref(null)
const preview = ref(false)
const is_loaded = ref(false)
const real = ref(props.default)
const style = reactive({})

const handlerPreview = url => {
  preview.value = true
}

onMounted(() => {
  /**
   * 自动获取父元素高度
   */
  const parent = image.value.parentNode
  style.width = '100px'
  style.height = '100px'
  style.display = 'block'
  style.margin = `${parent.offsetHeight / 2 - 50}px auto`
  lazyLoader()
})

const lazyLoader = () => {
  const dom = image.value
  const ob = new IntersectionObserver(item => {
    const ratio = item[0].intersectionRatio
    if (ratio > 0) {
      loaderImage(props.src)
        .then(i => {
          console.log(1)
          style = {}
          real.value = props.src
          is_loaded.value = true
        })
        .catch(e => (real.value = props.error))
      ob.unobserve(dom)
    }
  })
  ob.observe(dom)
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
</style>
