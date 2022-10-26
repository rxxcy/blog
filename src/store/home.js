import { defineStore } from 'pinia'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => {
    return {
      me: {
        nick: '若许闲乘月',
        avatar: 'https://img.rxxcy.com/i/images/2022/05/6282fd105912a.jpeg',
        autograph: '想学前端',
        description: [],
      },
    }
  },
  actions: {},
})
