export const state = () => ({
  sidebarOpen: true
})

export const mutations = {
  SET_SIDEBAR_STATE(state, isOpen) {
    state.sidebarOpen = isOpen
  }
}

export const actions = {
  toggleSidebar({ commit, state }) {
    const isOpen = !state.sidebarOpen
    commit('SET_SIDEBAR_STATE', isOpen)
  }
}
