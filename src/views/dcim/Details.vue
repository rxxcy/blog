// https://api.vvhan.com/api/tao
<template>
  <main>
    <Waterfall :list="list">
      <template #item="{ item, url, index }">
        <div class="card">
          <LazyImg :url="url" />
          <p class="text">这是内容</p>
        </div>
      </template>
    </Waterfall>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/style.css'
const list = ref([])

onMounted(() => {
  for (let index = 0; index < 20; index++) {
    const api = 'https://api#uomg#com/api/rand.img3'
    list.value.push({})
  }
})
</script>
