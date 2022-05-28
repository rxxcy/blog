<template>
  <app-header />
  <router-view />
  <Loadin />
  <top-up />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import Loadin from './components/Loadin.vue'
import TopUp from './components/Topup.vue'
</script>

<style></style>
