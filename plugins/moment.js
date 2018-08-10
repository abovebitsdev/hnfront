import Vue from 'vue'
import moment from 'moment'
import VueMoment from 'vue-moment'

moment.updateLocale('en', {
  calendar: {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: 'MMMM D, YYYY',
    lastWeek: 'MMMM D, YYYY',
    nextWeek: 'MMMM D, YYYY',
    sameElse: 'MMMM D, YYYY'
  }
})

Vue.use(VueMoment, moment)
