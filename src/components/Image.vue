<template>
  {{ src }}
  <!-- <img :src="src" /> -->
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
defineProps({
  src: {
    type: 'string',
    default: () => '',
  },
})
// onMounted(() => console.log())
const handlerPreview = url => {}
</script>

<style lang="scss" scoped>
img {
  height: 100%;
}
</style>
