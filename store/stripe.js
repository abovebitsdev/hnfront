import stripeApi from '~/api/stripe'

const state = () => ({
  subscriptions: null,
  charges: null
})

const mutations = {
  set_subscriptions (state, data) {
    state.subscriptions = data
  },

  set_charges (state, data) {
    state.charges = data
  }
}

const actions = {
  async FETCH_SUBSCRIPTIONS ({ commit }) {
    let { data } = await stripeApi.subscriptions.get()
    return commit('set_subscriptions', data || [])
  },

  async FETCH_CHARGES ({ commit }) {
    let { data } = await stripeApi.charges.get()
    return commit('set_charges', data || [])
  }
}

const getters = {
}

export default {
  state,
  actions,
  mutations,
  getters
}
