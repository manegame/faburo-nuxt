import pr from '~/service/prismic'

export const state = () => ({
  pages: []
})

export const actions = {
  async GET_PAGES ({ commit }) {
    commit('SET_PAGES', await pr.getPages())
  }
}

export const mutations = {
  SET_PAGES (state, data) {
    state.pages = data
  }
}
