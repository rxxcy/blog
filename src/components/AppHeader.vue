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

<style lang="scss" scoped>
header {
  backdrop-filter: saturate(180%) blur(20px);
  background-color: hsla(0, 0%, 100%, 0.86);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $header-z-index;

  nav {
    user-select: none;
    text-align: center;
    font-size: 1.6em;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      padding: 0.75em 0.85em;
      transition: color 0.3s ease, background 0.3s ease;
      color: #666;
      transition: all 0.3s;
      b {
        margin-left: 0.2em;
        font-weight: 100;
      }
    }
  }
}

a {
  &::before {
    user-select: none;
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
    // content: '📺';
    content: '⚔️';
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
    color: #5c66eb;
    background-color: #dee0fb;
  }
}

@media screen and (max-width: 720px) {
  nav {
    display: flex;
    justify-content: space-around;
    a {
      flex: 1;
      padding: 0.5em 0 !important;
      &::before {
        font-size: 1.3em;
        padding: 0em;
      }
      b {
        display: none;
      }
    }
  }
}
</style>
