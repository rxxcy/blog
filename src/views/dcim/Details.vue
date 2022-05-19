// https://api.vvhan.com/api/tao
<template>
  <main>
    <div class="info">
      <h1>吹响！悠风号 圣巡 二</h1>
      <p>
        <img :src="me.avatar" :alt="me.nick" />
        <span>{{ me.nick }}</span>
        <a>场景</a>
        <time>2019-5-30</time>
        <span class="vie">222</span>
      </p>
      <div class="description">
        我翻开历史一查，这历史没有年代，歪歪斜斜的每页上都写着“仁义道德”几个字。
        我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是“吃人”！
        书上写着这许多字，佃户说了这许多话，却都笑吟吟的睁着怪眼睛看我。 我也是人，他们想要吃我了！
        这几天是退一步想：假使那老头子不是刽子手扮的，真是医生，也仍然是吃人的人。他们的祖师李时珍做的“本草什么”上，明明写着人肉可以煎吃；他还能说自己不吃人么？
        至于我家大哥，也毫不冤枉他。他对我讲书的时候，亲口说过可以“易子而食”；又一回偶然议论起一个不好的人，他便说不但该杀，还当“食肉寝皮”。
        我那时年纪还小，心跳了好半天。前天狼子村佃户来说吃心肝的事，他也毫不奇怪，不住的点头。可见心思是同从前一样狠。既然可以“易子而食”，便什么都易得，什么人都吃得。
        我从前单听他讲道理，也糊涂过去；现在晓得他讲道理的时候，不但唇边还抹着人油，而且心里满装着吃人的意思。
        黑漆漆的，不知是日是夜。赵家的狗又叫起来了。
      </div>
    </div>
    <div class="container">
      <div class="item" v-for="i in list">
        <skk-image :src="i" />
      </div>
    </div>
    <Below />
  </main>
</template>

<script setup>
import below from '../../components/Below.vue'
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import SkkImage from '../../components/Image.vue'
const list = ref([])
const store = useStore()
const me = reactive(store.state.me)

onMounted(async () => {
  for (let index = 0; index < 25; index++) {
    // const { data } = await axios.get('https://api.rxxcy.com/v1/image/buyershow?format=string')
    // console.log(data)
    // list.value.push(data)
    list.value.push('https://img.rxxcy.com/i/images/2022/05/627c83a0ba476.jpg')
  }
})
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient(#e8eeff, #fff) repeat-x top left;
  background-size: 100% 300px;
  .info {
    max-width: 800px;
    padding: 7em 20px 0 20px;
    margin: 0 auto;
    h1 {
      font-family: '微软雅黑';
      font-weight: 200;
      font-size: 3em;
    }
    p {
      margin-top: 1em;
      display: flex;
      align-items: center;
      font-size: 1.2em;
      img {
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
        border-radius: 1em;
      }
      span,
      a,
      time {
        margin-right: 1em;
      }
    }
    .description {
      font-size: 1.2em;
      margin-top: 2em;
      margin-bottom: 3em;
      color: #6e6e73;
      letter-spacing: 0.1em;
      line-height: 1.7em;
    }
  }

  // .skk-container {
  //   box-sizing: border-box;
  //   padding: 1em 2em;
  //   display: flex;
  //   flex-wrap: wrap;
  //   .skk-item {
  //     width: 356px;
  //     height: 356px;
  //     padding: 10px 10px;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //       object-fit: cover;
  //     }
  //   }
  // }
  .bottom {
    padding: 10em 0 5em 0;
    text-align: center;
    color: $grey;
  }

  $container-width: 1800px;
  $gap: 10px;
  $colmun: 5;
  .container {
    width: $container-width;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: ($container-width - (($colmun * 2) * $gap)) / $colmun;
      height: ($container-width - (($colmun * 2) * $gap)) / $colmun + 20px;
      margin: $gap;
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }
}
</style>
