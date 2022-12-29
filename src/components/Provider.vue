<template>
  <n-scrollbar style="max-height: 100vh">
    <n-loading-bar-provider>
      <n-message-provider>
        <provider-api />
      </n-message-provider>
    </n-loading-bar-provider>
    <slot></slot>
    <n-watermark
      v-if="showWatermark"
      :content="watermark"
      cross
      fullscreen
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
    />
    <n-back-top />
  </n-scrollbar>
</template>

<script setup>
import { NScrollbar, NBackTop, NMessageProvider, NLoadingBarProvider, NWatermark } from 'naive-ui'
import { ref } from 'vue'
import ProviderApi from './ProviderApi.vue'

const showWatermark = ref(false)
const watermark = ref('若许闲乘月')
</script>

<style lang="scss" scoped></style>
