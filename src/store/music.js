import { defineStore } from 'pinia'

export const MusicStore = defineStore({
  id: 'music',
  state: () => {
    return {
      enabled: true,
    }
  },
  actions: {},
})
