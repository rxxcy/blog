<template>
  <app-header />
  <router-view />
  <Loadin />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import Loadin from './components/Loadin.vue'
</script>

<style lang="scss"></style>
