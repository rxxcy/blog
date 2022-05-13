<template>
  <div>
    <nav>
      <button
        v-for="item in category"
        :key="item.id"
        :class="{ active: item.id == active }"
        @click="handlerChnageActiveCategory(item.id)"
      >
        {{ item.title }}
      </button>
    </nav>
    <section></section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const category = computed(() => store.state.note.category)
const active = ref(0)

const handlerChnageActiveCategory = id => {
  if (id == active.value) return
  active.value = id
}
</script>

<style lang="scss" scoped>
nav {
  padding: 6em 0 4em;
  text-align: center;
  button {
    font-size: 1.2em;
    outline: none;
    border: none;
    border-radius: 0.2em;
    background-color: transparent;
    color: $color;
    padding: 0.15em 0.55em;
    margin: 0 1em;
    cursor: pointer;
    transition: all 0.3s;
  }
  .active {
    color: #4979a9;
    background-color: #fff;
  }
}
</style>
