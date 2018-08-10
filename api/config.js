import store from 'store'
import axios from 'axios'
import cookies from 'js-cookie'
import {setAuthToken, resetAuthToken} from '~/utils/auth'

axios.defaults.baseURL = process.env.api.host

axios.interceptors.response.use(response => response, (error) => {
  if (error.response && [423, 401].includes(error.response.status)) {
    resetAuthToken()
    if (error.response.status === 401) {
      return window.location.href = '/login'
    }
  }

  return Promise.reject(error);
});

const token = window.localStorage.getItem('token')

if (token) {
  setAuthToken(token)
} else {
  resetAuthToken()
}
