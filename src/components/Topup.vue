<template>
  <div class="topup" @click="handler2up"><p>up</p></div>
</template>

<script setup>
const handler2up = () => {
  console.log(`顶你个肺 ${Math.random()}`)
}
</script>

<style lang="scss" scoped>
$bgc: #0693e3;
.topup {
  position: fixed;
  right: 45px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  z-index: 999;
  background-color: #fff;
  border-radius: 45px;
  box-shadow: 0px 0px 1px 1px $bgc;
  opacity: 0.9;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    opacity: 1;
    color: #fff;
    background-color: $bgc;
    animation: skk-up 1.7s linear infinite;
  }
  p {
    line-height: 40px;
    text-align: center;
  }
}

@-webkit-keyframes skk-up {
  25% {
    -webkit-transform: translateY(-5px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(5px);
  }
}

@keyframes skk-up {
  25% {
    transform: translateY(-5px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
}
</style>
