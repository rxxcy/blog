import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const time = () => {
  const t = new Date()
  const Y = t.getFullYear()
  const M = t.getMonth() + 1
  const d = t.getDate()
  const H = t.getHours()
  const s = t.getMinutes()
  const i = t.getSeconds()
  return [Y, `${M}/${d}/${Y}, ${H}:${i}:${s}`]
}

const [year, now] = time()

const buildInfo = `
<!--
   © ${year} 若许闲乘月.
   Build: ${now}

   ===
   「この能力が光散らす その先に遥かな想いを」
-->
`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/constant.scss";`,
      },
    },
  },
})
