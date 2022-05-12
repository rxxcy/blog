<template>
  <main>
    <div class="project">
      <div class="container">
        <div class="item" v-for="item in 7">
          <img src="//img.rxxcy.com/i/images/2022/05/627c869425bd3.png" alt="" />
          <h3>项目{{ item }}</h3>
          <p>晴川历历汉阳树</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

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
      .item {
        margin-top: 3.5em;
        text-align: center;
        min-width: 25%;
        img {
          width: 8em;
          height: 8em;
          border-radius: 2em;
        }
      }
    }
  }
}
</style>
