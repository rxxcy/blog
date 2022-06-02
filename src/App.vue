<template>
  <AppHeader />
  <router-view />
  <Loadin />
  <!-- <Barrage /> -->
  <Player />
  <TopUp />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import Loadin from './components/Loadin.vue'
import TopUp from './components/Topup.vue'
import Player from './components/Player.vue'
// import Barrage from './components/Barrage.vue'
</script>

<style></style>
