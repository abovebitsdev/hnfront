import axios from 'axios'

export default {
  auth: {
    me: () => axios.get('me'),

    login: (data) => axios.post('auth/login', data),

    signup: (data) => axios.post('auth/signup', data),

    sendResetPassword: (data) => axios.post('auth/reset-password', data),

    resetPassword: (data) => axios.put('auth/reset-password', data),

    updateProfile: (data) => axios.put('me', data),
  }
}
