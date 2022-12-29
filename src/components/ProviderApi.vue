<template></template>

<script>
import { useMessage, useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
  },
})
</script>

<style lang="scss" scoped></style>
