// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// axios
import Axios from 'axios'
// mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'

require('./mock')

// axios
// Axios.defaults.baseURL = 'http://localhost:8080/api/'
Vue.prototype.$axios = Axios
// mintUI
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App},
  template: '<App/>'
})
