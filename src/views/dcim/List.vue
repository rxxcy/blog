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
    <section>
      <div class="item" v-for="item in 21" :key="item">
        <a :href="`/#/dcim/` + item">
          <div class="cover">
            <div class="star">⭐</div>
            <div class="count">7{{ item }}</div>
            <img src="https://img.rxxcy.com/i/images/2022/05/627c83a0ba476.jpg" alt="" srcset="" />
          </div>
          <div class="info">
            <h2>如果有一天你的信念忽然倒塌</h2>
            <time>2022-09-07</time>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const category = computed(() => store.state.dcim.category)
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
section {
  padding: 0 1em 10em;
  text-align: center;
  max-width: 1600px;
  margin: 0 auto;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  .item {
    display: inline-block;
    vertical-align: top;
    padding: 2em;
    .cover {
      width: 16em;
      height: 16em;
      overflow: hidden;
      border-radius: 0.2em;
      box-shadow: 0 5px 25px rgb(0 128 255 / 5%);
      position: relative;
      .star {
        font-size: 1.2em;
        position: absolute;
        top: 0.7em;
        left: 0.7em;
      }
      .count {
        font-size: 1.2em;
        color: #fff;
        position: absolute;
        top: 0.7em;
        right: 0.7em;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .info {
      text-align: left;
      h2 {
        width: 10em;
        font-family: '微软雅黑';
        color: #4979a9;
        font-weight: 100;
        padding: 0.5em 0 0.1em;
      }
      time {
        color: rgba($color: $color, $alpha: 0.7);
      }
    }
  }
}
</style>
