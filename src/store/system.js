import { defineStore } from 'pinia'

export const SystemStore = defineStore({
  id: 'system',
  state: () => {
    return {
      loader: {
        status: true,
        img: 'https://img.rxxcy.com/i/images/2022/05/6281bab828fc6.gif',
      },
      nav: [
        { id: 1, name: '主页', en: 'home', path: '/' },
        { id: 2, name: '项目', en: 'project', path: '/project' },
        { id: 3, name: '相册', en: 'dcim', path: '/dcim' },
        { id: 4, name: '笔记', en: 'note', path: '/note' },
        { id: 6, name: '音乐', en: 'music', path: '/music' },
        { id: 7, name: '追番', en: 'fan', path: '/fan' },
      ],

      dcim: {
        category: [
          { id: 0, title: '全部' },
          { id: 1, title: '星标' },
          { id: 2, title: '人像' },
          { id: 3, title: '场景' },
          { id: 4, title: '其他' },
        ],
      },
      note: {
        category: [
          { id: 0, title: '全部' },
          { id: 1, title: '日常' },
          { id: 2, title: '代码' },
          { id: 3, title: '其他' },
        ],
      },
    }
  },
  actions: {
    loadingStart() {
      this.loader.status = true
    },
    loadingFinish() {
      this.loader.status = false
    },
  },
})
