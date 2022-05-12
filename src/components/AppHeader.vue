<template>
  <header>
    <nav>
      <router-link v-for="(item, index) in nav" :key="index" :to="item.path" :name="item.en">
        <b>{{ item.name }}</b>
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const nav = computed(() => store.getters.nav)
</script>

<style lang="scss" scope>
a {
  &::before {
    user-select: none;
    margin-right: 0.2em;
  }
  &[name='home']::before {
    content: '🛸';
  }
  &[name='project']::before {
    content: '✨';
  }
  &[name='dcim']::before {
    content: '📷';
  }
  &[name='note']::before {
    content: '📒';
  }
  &[name='music']::before {
    content: '🎧';
  }
  &[name='fan']::before {
    content: '📺';
  }
}
.router-link-active {
  b {
    font-weight: 400;
  }
  &[name='home'] {
    color: #05b0ff;
    background-color: #eef7ff;
  }
  &[name='project'] {
    color: #ff8405;
    background-color: #fff5ea;
  }
  &[name='dcim'] {
    color: #4979a9;
    background-color: #e8eeff;
  }
  &[name='note'] {
    color: #4fa949;
    background-color: #e9ffed;
  }
  &[name='music'] {
    color: #9b0909; // 9b0909
    background-color: #fdefef;
  }
  &[name='fan'] {
    color: #fb7299;
    background-color: #fff1f5;
  }
}
</style>
