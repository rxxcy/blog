<template>
  <n-scrollbar style="max-height: 100vh">
    <app-header />
    <router-view />
    <!-- <loading /> -->
    <!-- <barrage /> -->
    <player />
    <!-- <top-up /> -->
    <n-back-top />
  </n-scrollbar>
</template>

<script setup>
import { NScrollbar, NBackTop } from 'naive-ui'
import AppHeader from './components/AppHeader.vue'
// import Loading from './components/Loading.vue'
// import TopUp from './components/Topup.vue'
import Player from './components/Player.vue'
// import Barrage from './components/Barrage.vue'
</script>

<style>

</style>
