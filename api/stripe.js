import axios from 'axios'

export default {
  customer: {
    create(data) {
      return axios.post('stripe/customers', data)
    }
  },

  subscriptions: {
    get() {
      return axios.get('stripe/subscriptions')
    }
  },

  charges: {
    get() {
      return axios.get('stripe/charges')
    }
  }
}
