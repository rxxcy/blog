<template>
  <main>
    <router-view />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  background: linear-gradient(#e9ffed, #fff) repeat-x top left;
  background-size: 100% 300px;
  min-height: 600px;
  .note {
    max-width: 800px;
    padding: 0 20px;
    margin: 0 auto;
  }
}
</style>
