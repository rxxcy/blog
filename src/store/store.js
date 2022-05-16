import { createStore } from 'vuex'

export default createStore({
  state: {
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
      { id: 7, name: '战绩', en: 'fan', path: '/fan' },
    ],
    me: {
      nick: '若许闲乘月',
      avatar: '//cdn.qiniu.rxxcy.com/images/2022/04/62545c52375b9.jpeg',
      autograph: '前端练习生',
      description: [],
    },
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
  },
  mutations: {
    CHANGE_LOADER_STATUS(state, value) {
      state.loader.status = value
    },
  },
  actions: {
    loaderOpen({ commit }) {
      commit('CHANGE_LOADER_STATUS', true)
    },
    loaderClose({ commit }) {
      commit('CHANGE_LOADER_STATUS', false)
    },
  },
  modules: {},
  getters: {
    nav: state => state.nav,
    loader_status: state => state.loader.status,
    loader_img: state => state.loader.img,
  },
})
