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
      <div class="note">
        <div class="item" v-for="i in 2" :key="i">
          <h2 class="title">
            <a :href="'/#/note/' + i">Re: 从零开始的黑魔法之旅 {{ i }}</a>
          </h2>
          <p class="info">
            <span>代码</span>
            <time>2020-02-02</time>
          </p>
        </div>
      </div>
    </section>
    <Below :message="message" />
  </div>
</template>

<script setup>
import Below from '../../components/Below.vue'
import { onMounted, reactive, ref } from 'vue'
// import { useStore } from 'vuex'
import { SystemStore } from '../../store/system'
import { useRoute } from 'vue-router'
const store = SystemStore()
const category = reactive(store.note.category)
const active = ref(0)
const message = ref('到底啦')

onMounted(() => {
  setActiveCate()
})

const setActiveCate = () => {
  const route = useRoute()
  const { cate } = route.query
  if (!/^\d+$/.test(cate)) return
  active.value = Number(cate)
}

const handlerChnageActiveCategory = id => {
  if (id == active.value) return
  active.value = id
  message.value = '到底啦'
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
    color: #4fa949;
    background-color: #fff;
  }
}
section {
  max-width: 800px;
  padding: 0 20px;
  margin: 0 auto;
  .item {
    font-size: 0.8em;
    margin-bottom: 2em;
    transition: all 0.3s;
    .title {
      font-size: 2.2em;
      font-weight: 100;
      line-height: 1.1;
      margin-bottom: 0.3em;
      a {
        color: #4fa949;
      }
    }
    .info {
      color: #b0d9ad;
      span {
        margin-right: 1em;
      }
    }
  }
  .tip {
    text-align: center;
    margin: 3em 0;
  }
}

@media screen and (max-width: $mobile-width) {
  nav {
    padding: 2em 0;
    button {
      margin: 0 0.3em;
    }
  }
  .item {
    margin-bottom: 3em !important;
    .title {
      text-align: center;
    }
    .info {
      text-align: center;
    }
  }
}
</style>
