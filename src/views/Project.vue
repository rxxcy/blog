<template>
  <main>
    <div class="project">
      <div class="container">
        <div class="item" v-for="item in 7">
          <img src="https://img.rxxcy.com/i/images/2022/05/62834491a2906.png" alt="" />
          <h3>博客系统{{ item }}</h3>
          <p>造轮子</p>
        </div>
      </div>
    </div>
    <div class="idea">
      <h2>IDEA</h2>
      <a class="i" v-for="item in ideas" :key="item.id" :href="item.url ? item.url : '#'" target="_blank">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </a>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const ideas = ref([
  { id: 1, name: '图像显隐', url: 'https://lab.rxxcy.com/magic', description: '文本写入图片' },
  { id: 2, name: '二进制时钟', url: 'https://lab.rxxcy.com/clock', description: 'kde二进制时钟' },
  { id: 3, name: '好看的颜色', url: 'https://lab.rxxcy.com/color', description: '鲜艳' },
  { id: 4, name: 'hash', url: 'https://lab.rxxcy.com/hash', description: '哈希' },
])
</script>

<style lang="scss" scoped>
main {
  .project {
    background: linear-gradient(#fff5ea, #fff) repeat-x top left;
    background-size: 100% 300px;
    .container {
      max-width: 800px;
      padding: 7em 0;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      transition: all 0.3s;
      .item {
        margin-bottom: 5.7em;
        text-align: center;
        min-width: 25%;
        img {
          width: 9em;
          height: 9em;
          border-radius: 2em;
          object-fit: cover;
        }
        h3 {
          font-size: 1.7em;
          margin: 1em 0 0.5em 0;
          color: #ff8405;
        }
        p {
          font-weight: 200;
          font-size: 1.1em;
          color: #aaa;
        }
      }
    }
  }
  .idea {
    margin-top: 3em;
    margin-bottom: 100px;
    text-align: center;
    h2 {
      margin: 1em 0;
      font-size: 3em;
      font-family: $wryh;
      font-weight: 200;
    }
    a {
      display: block;
      padding: 1.7em 0;
      border-radius: 0.5em;
      transition: all 0.3s;
      &:hover {
        background-color: rgb(242, 249, 255);
      }
      h3 {
        color: #ff8405;
        font-family: $wryh;
        font-weight: 200;
        font-size: 2.7em;
      }
      p {
        color: #777;
      }
    }
  }
}
@media screen and (max-width: $mobile-width) {
  .container {
    padding-top: 3em !important;
    .item {
      margin-bottom: 2.7em !important;
      min-width: 50% !important;
    }
  }
}
</style>
