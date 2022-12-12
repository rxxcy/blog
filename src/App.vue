<template>
  <app-header />
  <router-view />
  <loading />
  <!-- <Barrage /> -->
  <player />
  <top-up />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import Loading from './components/Loading.vue'
import TopUp from './components/Topup.vue'
import Player from './components/Player.vue'
// import Barrage from './components/Barrage.vue'
</script>

<style></style>
