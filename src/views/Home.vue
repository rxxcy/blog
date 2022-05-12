<template>
  <main>
    <div class="me">
      <img :src="me.avatar" alt="" />
      <h1>{{ me.nick }}</h1>
      <p>{{ me.autograph }}</p>
    </div>
    <div class="summary">
      <p>九零后，云南，现居昆明。</p>
      <p>
        一九年毕业，云南财经大学，计算机科学与技术。
        <small className="del">精通JavaScript,Rust,Golang,PHP,Python,Java等编程语言名称单词拼写.</small>
      </p>
      <p>
        那河畔的金柳，是夕阳中的新娘；波光里的艳影，在我的心头荡漾。软泥上的青荇，油油的在水底招摇；在康河的柔波里，我甘心做一条水草！
      </p>
      <p>
        <img src="//cdn.u1.huluxia.com/g4/M02/33/94/rBAAdmHFYfiAAEqcAAADyCKHgEI329.png" alt="🐥" />
      </p>
      <p>
        瓦楞上许多枯草的断茎当风抖着，正在说明这老屋难免易主的原因。几房的本家大约已经搬走了，所以很寂静。我到了自家的房外，我的母亲早已迎着出来了，接着便飞出了八岁的侄儿宏儿。
      </p>
      <p>
        <img src="//tucang.cc/api/image/show/7f6ae1b192f3c64433b09b91e439177f" alt="✨" />
      </p>
      <p><a href="#">邮箱</a> <a href="#">七七</a></p>
    </div>
  </main>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const me = computed(() => store.state.me)
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient(#eef7ff, #fff) repeat-x top left;
  background-size: 100% 300px;
  user-select: none;
  .me {
    padding: 12em 0;
    text-align: center;
    img {
      border-radius: 99em;
      display: block;
      margin: 0 auto;
      height: 15em;
      box-shadow: 0 0.5em 2em #eef7ff;
      font-weight: 100;
    }
    h1 {
      font-family: '微软雅黑';
      font-size: 5em;
      font-weight: 200;
      padding: 0.3em 0;
    }
    p {
      font-size: 1.6em;
      opacity: 0.5;
    }
  }
  .summary {
    max-width: 850px;
    padding: 0 20px;
    margin: 0 auto;
    padding: 2em 0 10em;
    p {
      font-size: 1.35em;
      line-height: 1.3;
      color: #666;
      padding: 0.8em 0;
      small {
        color: rgba($color: #9166ff, $alpha: 0.3);
        font-size: 0.7em;
      }
      img {
        display: inline-block;
        vertical-align: middle;
        width: 1.5em;
        height: 1.5em;
        margin: -0.3em 0.2em -0.1em;
      }
    }
  }
}
</style>
