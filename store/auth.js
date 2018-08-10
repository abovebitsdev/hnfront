import api from '~/api/auth'
import { setAuthToken, resetAuthToken } from '~/utils/auth'
import jwtDecode from 'jwt-decode'

const state = () => ({
  user: null
})

const mutations = {
  setJwt (state, response) {
    let { data: { jwt }} = response
    state.user = Object.assign({}, jwtDecode(jwt))
    setAuthToken(jwt)
  },

  setUser (state, data) {
    state.user = data
  },

  updateUser (state, data) {
    state.user = Object.assign({}, state.user, data)
  },

  resetUser (state) {
    state.user = null
    resetAuthToken()
  }
}

const actions = {
  async UPDATE_PROFILE ({ commit }, data) {
    commit('updateUser', data)
    return await api.auth.updateProfile(data)
  },

  async RESET_PWD ({ commit }, data) {
    return await api.auth.resetPassword(data)
  },

  async SEND_RESET_PWD ({ commit }, data) {
    return await api.auth.sendResetPassword(data)
  },

  async UPDATE ({ commit }, data) {
    return commit('updateUser', data)
  },

  async FETCH ({ commit }) {
    return commit('updateUser', (await api.auth.me()).data )
  },

  async login ({ commit, dispatch }, data) {
    return commit('setJwt', await api.auth.login(data))
  },

  async signup ({commit}, data) {
    return await api.auth.signup(data)
  },

  reset ({commit}) {
    commit('resetUser')
  }
}

const getters = {
  isAuthenticated (state) {
    return !!state.user
  },

  loggedUser (state) {
    return state.user
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
