<template>
  <div class="below">{{ message }}</div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: () => '到底啦',
  },
})
</script>

<style lang="scss" scoped>
.below {
  font-size: 0.9em;
  text-align: center;
  margin: 5em 0 2em 0;
}
</style>
