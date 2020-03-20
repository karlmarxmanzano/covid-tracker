import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'

import axios from 'axios'

import store from './store/index'

import App from './App.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.baseURL = 'https://coronavirus-tracker-api.herokuapp.com'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
