<template>
  <main>
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view> -->
    <router-view />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  background: linear-gradient(#e8eeff, #fff) repeat-x top left;
  background-size: 100% 300px;
}
</style>
