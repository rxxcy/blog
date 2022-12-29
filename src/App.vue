<template>
  <app-provider>
    <app-header />
    <router-view />
    <!-- <loading /> -->
    <!-- <barrage /> -->
    <player />
    <!-- <top-up /> -->
  </app-provider>
</template>

<script setup>
import AppProvider from './components/Provider.vue'
import AppHeader from './components/AppHeader.vue'
// import Loading from './components/Loading.vue'
// import TopUp from './components/Topup.vue'
import Player from './components/Player.vue'
// import Barrage from './components/Barrage.vue'
</script>

<style></style>
