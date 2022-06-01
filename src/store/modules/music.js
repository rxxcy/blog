const music = {
  state: () => ({
    list: [],
    show: true,
    pause: false,
  }),
  mutations: {
    SHOW_PLAYER(state, value) {
      if (state.show == value) return
      state.show = value
    },
    PAUSE_PLAYER(state, value) {
      if (state.show == value) return
      state.pause = value
    },
  },
  actions: {
    pausePlayer({ commit }) {
      commit('PAUSE_PLAYER')
    },
    continuePlayer({ commit }) {
      console.log('这里')
    },
    showPlayer({ commit }) {
      console.log('开启...')
      commit('SHOW_PLAYER', true)
    },
    hiddenPlayer({ commit }) {
      console.log('关闭')
      commit('SHOW_PLAYER', false)
    },
  },
  getters: {
    show: state => state.show,
    list: state => state.list,
  },
}

export default music
