import { createStore } from 'vuex'
// import home from './modules/home'

export default createStore({
  state: {
    scroll: {
      show: true,
    },
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
      avatar: 'https://img.rxxcy.com/i/images/2022/05/6282fd105912a.jpeg',
      autograph: '想学前端',
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
    /**
     * 开加载中
     */
    loaderOpen({ commit }) {
      commit('CHANGE_LOADER_STATUS', true)
    },
    /**
     * 关加载中
     */
    loaderClose({ commit }) {
      commit('CHANGE_LOADER_STATUS', false)
    },
    /**
     * 开滚动条
     */
  },
  modules: {
    // home
  },
  getters: {
    nav: state => state.nav,
    loader_status: state => state.loader.status,
    loader_img: state => state.loader.img,
  },
})
