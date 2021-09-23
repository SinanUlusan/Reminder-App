import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCalendar, faHome, faFlag, faCalendarDay, faList, faPlusCircle, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faCalendar, faHome, faFlag, faCalendarDay, faList, faPlusCircle, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  store, 
  render: h => h(App)
})
