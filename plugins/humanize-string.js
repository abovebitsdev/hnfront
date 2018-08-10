import Vue from 'vue'
import humanizeString from 'humanize-string'

Vue.filter('humanize', function (value) {
  if (value) {
    try {
      return humanizeString(value)
    } catch (e) {
      console.error('[filter#humanize] Error:', e)
    }
  }
})

Vue.filter('money', function (value, prefix = '$') {
  if (value) {
    try {
      return prefix + parseFloat(value).toFixed(2)
    } catch (e) {
      console.error('[filter#money] Error:', e)
    }
  } else {
    return prefix + '0'
  }
})
