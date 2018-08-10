import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export function setAuthToken (token) {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
  Cookie.set('jwt', token)

  axios.defaults.headers.common = {
    'Authorization': `Authorization: Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export function resetAuthToken () {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  Cookie.remove('jwt')

  delete axios.defaults.headers.common['Authorization']
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}

export const getUserFromLocalStorage = () => {
  if (process.browser) {
    console.log('getUserFromLocalStorage')
    const json = window.localStorage.user
    return json ? JSON.parse(json) : undefined
  }
}
